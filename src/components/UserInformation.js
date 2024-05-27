import { useState, useEffect } from 'react';
import axios from 'axios';

const UserInformation = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
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

        if (response && response.data) {
          console.log('User data fetched:', response.data); // Log user data
          setUser(response.data);
        } else {
          console.error('Invalid response from the server:', response);
          setError('Invalid response from the server');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data');
      }
    };

    fetchUserData();
  }, []);

  return { user, error };
};

export default UserInformation;



// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserInformation = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.error('No token found');
//           return;
//         }
//         const response = await axios.get('http://localhost:5000/api/users', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (response && response.data) {
//           setUser(response.data);
//         } else {
//           console.error('Invalid response from the server:', response);
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   return user;
// };

// export default UserInformation;


// ^^^^^^^^^^^^^^^^ working