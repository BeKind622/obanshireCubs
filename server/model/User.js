const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  email: String,
  password: String,
  userType: String,
  forename: String,
  // Add other fields as needed
});

const User = mongoose.model('User', usersSchema);

module.exports = User;
