const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('./model/User');
require('./model/Department');
require('./model/Doctor');




const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});


app.get('/api/users', async (req, res) => {
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
      const user = await User.findById(decoded.userId)
      .populate('department_id')
      .populate('doctor_id');

      // The decoded.userId should match the structure used in jwt.sign during login

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Return data only for the authenticated user
    // Inside the /api/users route
const formattedUser = {
  _id: user._id,
  email: user.email,
  name: user.name,
  guardian: user.guardian, // Add this line
  guardian_name: user.guardian_name,
  notes: user.notes, 
  dob: user.dob,
  patient_number: user.patient_number,
  appointment_date: user.appointment_date,
  appointment_notes: user.appointment_notes,
  department_id: user.department_id ? {
    name: user.department_id.name,
    doctor: user.department_id.doctor,
    location: user.department_id.location,
    video: user.department_id.video,
    
  
 
    // Add other department fields as needed
  } : null,
  doctor_id: user.doctor_id ? {
    name: user.doctor_id.name,
    department: user.doctor_id.department,
    department_id: user.doctor_id.department_id,
    medicalID: user.doctor_id.medicalID,
    profilePic: user.doctor_id.profilePic,
} : null,
  
  
  // Add any additional fields you want to include
};

res.json(formattedUser);

    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// patient login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid patient number or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid patient number or password' });
    }

    // Include is_admin in the token payload
    const tokenPayload = {
      userId: user._id,
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



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
