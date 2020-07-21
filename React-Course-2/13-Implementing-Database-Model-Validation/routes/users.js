const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route     POST api/users
// @desc      Register a user
// @access    Public
router.post(
	'/',
	// add validation
	// check(field we want to check, message)
	[
		check('name', 'Please enter name')
			// add rules to make sure field is not empty
			.not()
			.isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({ min: 6 }),
	],
	(req, res) => {
		// res.send('Register a user');

		// returns data that is sent to a route
		// in our case it will be (name, email, password, date)
		// res.send(req.body);

		// we only need this for routes that accept data and need validation
		const errors = validationResult(req);

		// if we have any errors, validation failed
		if (!errors.isEmpty()) {
			return (
				res
					// send a response
					.status(400)
					// include data with array of errors
					.json({ errors: errors.array() })
			);
		}
		res.send('passed');
	}
);

// export router
module.exports = router;
