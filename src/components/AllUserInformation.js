import { useState, useEffect } from 'react';
import axios from 'axios';

const AllUserInformation = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');
        console.log('Token found:', token); // Debugging log

        if (!token) {
          console.error('No token found');
          setError('No token found');
          return;
        }

        const response = await axios.get('http://localhost:5000/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Handle response data
        if (response && Array.isArray(response.data)) {
          console.log('All users data fetched:', response.data); // Log user data
          setUsers(response.data);
        } else if (response && response.data) {
          // Check if it's a single user object and wrap it in an array for consistency
          console.log('Single user data fetched:', response.data); // Log user data
          setUsers([response.data]);
        } else {
          console.error('Invalid response from the server:', response);
          setError('Invalid response from the server');
        }
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 200 range
          console.error('Server error:', error.response.status, error.response.data);
          setError(`Server error: ${error.response.status}`);
        } else if (error.request) {
          // Request was made but no response received
          console.error('Network error:', error.request);
          setError('Network error: No response from server');
        } else {
          // Other errors
          console.error('Error:', error.message);
          setError('Error fetching user data');
        }
      }
    };

    fetchUserData();
  }, []);

  return { users, error };
};

export default AllUserInformation;
