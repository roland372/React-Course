const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
	// create a relation between user and contact, each user will have his own individual contacts
	user: {
		type: mongoose.Schema.Types.ObjectId,
		// refer to a specific collection
		ref: 'users',
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
	},
	type: {
		type: String,
		default: 'personal',
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('contact', ContactSchema);
