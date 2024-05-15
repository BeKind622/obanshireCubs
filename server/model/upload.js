const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const Gallery = require('../model/Gallery');

router.post('/upload', upload.single('image'), async (req, res) => {  // Ensure 'image' matches the frontend field name
    try {
        const { originalname, mimetype, filename } = req.file;
        const imagePath = req.file.path;
        const imageBuffer = fs.readFileSync(imagePath);
        const imageData = imageBuffer.toString('base64');

        const newImage = new Gallery({
            filename: originalname,
            description: req.body.description || '',
            uploadDate: Date.now(),
            contentType: mimetype,
            imageData: imageData,
        });

        await newImage.save();
        res.status(201).send('Image uploaded successfully!');
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
