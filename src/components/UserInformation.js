import { useState, useEffect } from 'react';
import axios from 'axios';

const UserInformation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Debugging: Checking if the component has mounted
        console.log('Component mounted, fetching user data...');

        const token = localStorage.getItem('token');
        // Debugging: Log the retrieved token
        console.log('Retrieved token:', token);

        if (!token) {
          console.error('No token found in localStorage');
          return;
        }

        // Debugging: Before making the API request
        console.log('Making API request to fetch user data with token...');

        const response = await axios.get('http://localhost:5000/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Debugging: After receiving the response
        console.log('API response received:', response);

        if (response && response.data) {
          // Debugging: Logging the user data
          console.log('User data fetched successfully:', response.data);
          setUser(response.data);
        } else {
          console.error('Invalid response from the server:', response);
        }
      } catch (error) {
        // Debugging: Logging the error
        console.error('Error occurred while fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return user;
};

export default UserInformation;
