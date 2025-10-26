const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  name: String,
  cause: String,
  location: String,
  email: String
});

module.exports = mongoose.model('NGO', ngoSchema);
