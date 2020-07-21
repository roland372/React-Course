// create basic express server
// import express from 'express';

const express = require('express');

// initialize express into app
const app = express();

// add route
app.get('/', (req, res) =>
	// send data
	// res.send('Hello World')
	res.json({ msg: 'Welcome to the ContactKeeper API' })
);

// define routes
// (route that we enter in our browser, code that we run for that route)
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

// listen for connections to port that we're specified
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
