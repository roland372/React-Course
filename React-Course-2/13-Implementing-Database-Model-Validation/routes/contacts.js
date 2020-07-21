const express = require('express');
const router = express.Router();

// @route     GET api/contacts
// @desc      Get all users contacts
// @access    Private
router.get('/', (req, res) => {
	res.send('Get all contacts');
});

// @route     POST api/contacts
// @desc      Add new contact
// @access    Private
router.post('/', (req, res) => {
	res.send('Add contact');
});

// @route     PUT api/contacts:id
// @desc      Update contact
// @access    Private
router.put('/:id', (req, res) => {
	res.send('Update contact');
});

// @route     DELETE api/contacts:id
// @desc      Delete contact
// @access    Private
router.delete('/:id', (req, res) => {
	res.send('Delete contact');
});

// export router
module.exports = router;

// get - fetch data from a server
// post - send/submit data to a server
// put - update something that's already on a server
// delete - delete something from a server
