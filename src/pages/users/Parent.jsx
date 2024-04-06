import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ParentDashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          // Retrieve the token from local storage
          const token = localStorage.getItem('token');
          console.log(token);
  
          if (!token) {
            console.error('No token found');
            return;
          }
  
          // Make a GET request to the /api/users endpoint with the token in the headers
          const response = await axios.get('http://localhost:5000/api/users', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          // Update the state with the received user data
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
   // Call the fetchUserData function when the component mounts
   fetchUserData();
}, []); // The empty dependency array ensures this effect runs only once on component mount
const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');

    // Redirect to the login page or another desired route
    navigate('/login');
  };
  return (


<>


</>
  )


};

export default ParentDashboard;

