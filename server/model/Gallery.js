const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    filename: String,
    description: String,
    uploadDate: Date,
    contentType: String,
    imageData: String,  // Ensure this is String since you're saving base64 encoded data
    // Add other fields as needed
});

const Gallery = mongoose.model('Gallery', gallerySchema);  // Corrected model name to match convention

module.exports = Gallery;
