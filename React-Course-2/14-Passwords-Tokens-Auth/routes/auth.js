const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get(
	'/',
	// to protect a route with authentication, we bring it from a middleware and just pass it as a second paremeter to that route
	auth,
	async (req, res) => {
		// res.send('Get logged in user');

		// get user from a database
		const user = await User.findById(req.user.id)
			// we don't want to get user's password, so we can exclude it (it's still encrypted)
			.select('-password');

		// send user in response
		res.json(user);
		try {
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public
router.post(
	'/',
	// add validation
	[
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Password is required').exists(),
	],
	async (req, res) => {
		// res.send('Log in user');
		// check if there are any errors in validation
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// destructure body, we don't need a name, because we're only loggin in
		const { email, password } = req.body;

		try {
			// check if user already exists
			let user = await User.findOne({ email: email });

			// if there's no user with that email, meaning user is not registered
			if (!user) {
				return res.status(400).json({ msg: 'Invalid Credentials' });
			}

			// if we've found the user, we want to compare passwords
			// compare(
			// plain password - the one that user enters,
			// hashed password - stored in a database)
			const isMatch = await bcrypt.compare(password, user.password);

			// if passwords do NOT match
			if (!isMatch) {
				return res.status(400).json({ msg: 'Invalid Credentials' });
			}

			// if passwords DO match
			const payload = {
				user: {
					// based on the users id we can get all it's data that we need, like contacts
					id: user.id,
				},
			};

			// generate jwt token
			// sign(data we want to send, secret, options)
			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{
					// when token expires in seconds
					expiresIn: 360000,
				},
				(err, token) => {
					// if theres an error
					if (err) throw err;
					// else return token
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
