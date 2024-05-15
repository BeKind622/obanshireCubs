const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    filename: String,
    description: String,
    uploadDate: { type: Date, default: Date.now },
    contentType: String,
    imageData: String,
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
