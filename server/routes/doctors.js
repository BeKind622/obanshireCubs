// app.get('/api/doctors', async (req, res) => {
//     try {
//       // Extract the token from the request headers
//       const token = req.headers.authorization?.split(' ')[1];
  
//       if (!token) {
//         return res.status(401).json({ error: 'Unauthorized: No token provided' });
//       }
  
//       // Verify the token
//       jwt.verify(token, 'your-secret-key', async (err, decoded) => {
//         if (err) {
//           return res.status(401).json({ error: 'Unauthorized: Invalid token' });
//         }
  
//         // The decoded.doctorId should match the structure used in jwt.sign during login
//         const doctor = await doctor.findById(decoded.doctorId);
  
//         if (!doctor) {
//           return res.status(404).json({ error: 'doctor not found' });
//         }
  
//         // Return data only for the authenticated doctor
//       // Inside the /api/doctors route
//   const formattedDoctor = {
//     _id: doctor._id,
//     name: doctor.name,
//     department: doctor.department,
//     is_admin: doctor.is_admin, // Add this line
//     // Add any additional fields you want to include
//   };

//   const formattedDoc = {
// docName: doc
//   }
//   res.json(formattedDoc);
  
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });