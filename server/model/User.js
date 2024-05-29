const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  forename: { type: String, required: true },
  surname: { type: String, required: true },
  disclosure: { type: String, required: true }, // Added disclosure field
  availability: { type: [Date], required: true } // Define availability as an array of Date

  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
