const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('./model/User');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Route to get user data
app.get("/api/users", async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Unauthorized: Invalid token" });
      }

      // The decoded.userId should match the structure used in jwt.sign during login
      const user = await User.findById(decoded.userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const formattedUser = {
        _id: user._id,
        email: user.email,
        forename: user.forename,
        surname: user.surname,
        userType: user.userType,
        disclosure: user.disclosure,
        availability: user.availability
      };

      res.json(formattedUser);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`Login attempt with email: ${email}`);
    
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('Password does not match');
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const tokenPayload = { userId: user._id };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

    console.log('Login successful');
    res.json({ token });
  } catch (error) {
    console.error('Internal Server Error:', error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).send('Unauthorized');
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send('Unauthorized');
  }
};

// const authenticate = async (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) {
//     return res.status(401).send('Unauthorized');
//   }

//   try {
//     const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your actual secret key
//     const user = await User.findById(decoded.id);
//     if (!user) {
//       return res.status(401).send('Unauthorized');
//     }
//     req.user = user;
//     next();
//   } catch (error) {
//     return res.status(401).send('Unauthorized');
//   }
// };

// helper availability code
app.post('/api/users/availability', authenticate, async (req, res) => {
  const { availability } = req.body;
  try {
    if (!Array.isArray(availability)) {
      return res.status(400).send('Availability should be an array of dates');
    }
    req.user.availability.push(...availability);
    await req.user.save();
    res.status(200).send('Availability updated successfully');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating availability');
  }
});

// User Registration Endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { email, password, forename, surname, userType } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
      forename,
      surname,
      userType,
      disclosure: false, // Initialize disclosure
      availability: [], // Initialize availability as an empty array
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// image upload code

const multer = require('multer');

const Gallery = require('./model/Gallery');



app.use("/uploads", express.static("uploads"));
        
//fetch posts
app.get('/api/galleries', async (req, res) => {
  try {
    const galleries = await Gallery.find();
    res.json(galleries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve the uploads folder as static files
app.use("/uploads", express.static("uploads"));

//format for the post's pictures
const path = require("path"); // Needed to handle file extensions
// Custom storage configuration for Multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const extension = file.originalname.split('.').pop(); // Extract the file extension
      const baseName = file.originalname.replace(`.${extension}`, ''); // Fix template literal syntax

      // Combine base filename with unique suffix and original extension
      const newFilename = `${baseName}-${uniqueSuffix}.${extension}`; // Use correct template literal syntax
      cb(null, newFilename);
  }
});

const upload = multer({ storage }); // Use the custom storage

// Add a picture to the gallery
app.post("/api/galleries", upload.single("imageData"), async (req, res) => {
  try {
    const { filename, description, uploadDate, contentType } = req.body;

    const galleryEntry = new Gallery({
      filename,
      description,
      uploadDate,
      contentType,
      imageData: req.file.filename,
    });

    await galleryEntry.save();
    res.status(201).json(galleryEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

  

