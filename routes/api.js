const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Donation = require('../models/donation.model');

// Create user
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Create donation
router.post('/donations', async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.json(donation);
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all donations
router.get('/donations', async (req, res) => {
  const donations = await Donation.find();
  res.json(donations);
});

// Get donations by username
router.get('/donations/:username', async (req, res) => {
  const donations = await Donation.find({ username: req.params.username });
  res.json(donations);
});

// Update donation by ID
router.put('/donations/:id', async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(donation);
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete donation by ID
router.delete('/donations/:id', async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch(err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
