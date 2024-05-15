const express = require('express');
const router = express.Router();
const multer = require('multer');
const Gallery = require('../models/Gallery');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${extension}`);
    }
});

const upload = multer({ storage });

router.post('/galleries', upload.single('imageData'), async (req, res) => {
    try {
        const { filename, mimetype } = req.file;

        const newGallery = new Gallery({
            filename: filename,
            description: req.body.description || '',
            contentType: mimetype,
            imageData: filename
        });

        await newGallery.save();
        res.status(201).json(newGallery);
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/galleries', async (req, res) => {
    try {
        const galleries = await Gallery.find();
        res.json(galleries);
    } catch (error) {
        console.error('Error fetching galleries:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
