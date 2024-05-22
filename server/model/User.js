const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  forename: { type: String, required: true },
  surname: { type: String, required: true },
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
