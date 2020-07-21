const mongoose = require('mongoose');

// create user model schema
const UserSchema = mongoose.Schema({
	// set properties that we want our user to have
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

// export user model passing schema that we created
module.exports = mongoose.model('user', UserSchema);
