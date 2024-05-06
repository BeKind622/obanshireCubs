const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Leader = require('./model/Leader');
const Parent = require('./model/Parent');


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

app.get('/api/leaders', async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    // Verify the token
    jwt.verify(token, 'your-secret-key', async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }
      const leader = await Leader.findById(decoded.userId); // Retrieve leader from DB

      if (!leader) {
        return res.status(404).json({ error: 'Leader not found' });
      }

      // Return data only for the authenticated leader
      const formattedLeader = {
        _id: leader._id,
        email: leader.email,
        name: leader.name,
        password: leader.password,
        // Add other department fields as needed
      };

      res.json(formattedLeader);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Leader login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const leader = await Leader.findOne({ email });

    if (!leader) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, leader.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Include is_admin in the token payload
    const tokenPayload = {
      userId: leader._id,
    };

    const token = jwt.sign(tokenPayload, 'your-secret-key', {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Route for parent login
app.post('/api/parent/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the parent by email
    const parent = await Parent.findOne({ email });
    // If parent not found, return error
    if (!parent) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, parent.password);
    // If passwords don't match, return error
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    // Include user type in token payload
    const tokenPayload = {
      userId: parent._id,
      userType: 'parent', // Set the user type to 'parent'
    };
    // Generate JWT token
    const token = jwt.sign(tokenPayload, 'your-secret-key', {
      expiresIn: '1h',
    });
    // Send token as response
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get parent data
app.get('/api/parents', async (req, res) => {
  try {
    // Extract the token from the request headers
    const token = req.headers.authorization?.split(' ')[1];
    // If no token provided, return error
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
    // Verify the token
    jwt.verify(token, 'your-secret-key', async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }
      // Find parent by user ID
      const parent = await Parent.findById(decoded.userId);
      // If parent not found, return error
      if (!parent) {
        return res.status(404).json({ error: 'Parent not found' });
      }
      // Return parent data
      res.json({
        _id: parent._id,
        email: parent.email,
        userType: 'parent', // Include user type in response
        // Add other fields as needed
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
