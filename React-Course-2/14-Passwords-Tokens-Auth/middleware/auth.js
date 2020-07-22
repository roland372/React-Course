// function that has access to req and res
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
	// after we're done we always want to call next, to move to the next piece of middleware

	// get token from header
	const token = req.header('x-auth-token');

	// check if token does NOT exists
	if (!token) {
		return res.status(401).json({ msg: 'No token, authorization denied' });
	}

	// if there is a token, we want to verify it
	try {
		// verify a token
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		// grab user and assign it to a decoded token, allowing user access to that route
		req.user = decoded.user;

		// move on to next middleware
		next();

		// if token is not valid
	} catch (err) {
		res.status(401).json({ msg: 'Token is not valid' });
	}
};

// when you register or login you will get assigned a token, after that before we allow user to login, we want to compare those tokens, and only move on when they match
