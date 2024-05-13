const mongoose = require('mongoose');


const gallerySchema = new mongoose.Schema({
   filename: String,
    description: String,
    uploadDate: Date,
    contentType: String,
    imageData: Binary,
    // Add other fields as needed
  });
  
  const gallery = mongoose.model('gallery', usersSchema);
  
  module.exports = gallery;
  