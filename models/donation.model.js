const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  email: { type: String },
  amount: { type: Number, required: true },
  message: { type: String },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending','completed','cancelled'], default: 'pending' }
});

module.exports = mongoose.model('Donation', donationSchema);
