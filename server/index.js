const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('./model/User');
const Department= require('./model/Department');
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
                forename: user.forename,
                surname: user.surname,
                guardian: user.guardian,
                guardian_name: user.guardian_name,
                dob: user.dob,
                patient_number: user.patient_number,
                appointment_date: user.appointment_date,
                appointment_notes: user.appointment_notes,
                notes: user.notes,
                photo: user.photo,
                isParent: user.isParent,

                department_id: user.department_id ? {
                    name: user.department_id.name,
                    details: user.department_id.details,
                    doctor_id: user.department_id.doctor_id,
                    doctor_img: user.department_id.doctor_img,
                    nurse: user.department_id.nurse,
                    nurse_img: user.department_id.nurse_img,
                    map: user.department_id.map,
                    phone: user.department_id.phone,
                } : null,

                doctor_id: user.doctor_id ? {
                    name: user.doctor_id.name,
                    speciality: user.doctor_id.speciality,
                    department_id: user.doctor_id.department_id,
                    contact: user.doctor_id.contact,
                    photo: user.doctor_id.photo,
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
      return res.status(401).json({ error: 'Invalid patient email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid patient email or password' });
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



// Define a new route to fetch all departments
app.get('/api/departments', async (req, res) => {
  try {
    // Fetch all departments from the database
    const departments = await Department.find();

    // Return the list of departments
    res.json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//trying to make register page 

// User Registration Endpoint
app.post('/api/register', async (req, res) => {
    try {
      // Extract registration data from request body
      const { email, password, forename, surname, dob, patient_number} = req.body;
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user document
      const newUser = new User({
        email,
        password: hashedPassword,
        forename,
        surname,
        dob,
        patient_number
        // Add any additional fields as needed
      });
  
      // Save the new user document to the database
      await newUser.save();
  
      // Respond with success message
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  