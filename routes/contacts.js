const express = require('express');

const router = express.Router();

//@route     GET api/contacts
//@desc      Get all users contact
//@access    Private
router.get('/', (req, res) => {
  res.send('Get All contacts');
});

//@route     POST api/contacts
//@desc      Add new Contact
//@access    Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

//@route     PUT api/contacts/:id
//@desc      Update contact
//@access    Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

//@route     DELETE api/contact
//@desc      Delete contact
//@access    Private
router.delete('/', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
