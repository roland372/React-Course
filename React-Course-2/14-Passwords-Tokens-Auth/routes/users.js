const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route     POST api/users
// @desc      Register a user
// @access    Public
router.post(
	'/',
	[
		check('name', 'Please enter name').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		// res.send('passed');

		// destructure body, pulling stuff we need
		const { name, email, password } = req.body;

		try {
			// find user in database by it's email
			let user = await User.findOne({ email: email });

			// check if user with that email exists
			if (user) {
				res.status(400).json({ msg: 'User already exists' });
			}
			// if user doesn't exist, create a new user based on our User model
			user = new User({
				name: name,
				email: email,
				password: password,
			});

			// before saving user to database we want to encrypt password
			// genSalt(determines how strong the password is)
			const salt = await bcrypt.genSalt(10);

			// hash the password (right now it's in plain text)
			// hash(password to hash, salt amount )
			user.password = await bcrypt.hash(password, salt);

			// save user to database
			await user.save();

			// res.send('User saved');

			// create object that we want to send in the token
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
