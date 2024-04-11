import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
// import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../../components/DashboardMenu';
const UserDashboard = () => {
  
  const [user, setUser] = useState(null);
  const formattedDOB = user ? moment(user.dob).format('D/MM/YYYY') : '';
  
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

  return (
    <div>
      <div className="flex flex-col">
        <div className="w-full flex flex-col">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8 max-w-30">
            {user && (
              <ul key={user._id} >
                <li><span className="font-bold w-24 text-blue-500">First name:</span> <span className="text-gray-700">{user.forename}</span></li>
                <li><span className="font-bold w-24 text-blue-500">Last name:</span> <span className="text-gray-700">{user.surname}</span></li>
                <li><span className="font-bold w-24 text-blue-500">Birthday:</span> <span className="text-gray-700">{formattedDOB}</span></li>
                <li><span className="font-bold w-24 text-blue-500">Email:</span> <span className="text-gray-700">{user.email}</span></li>
                <li><span className="font-bold w-24 text-blue-500">Guardian name:</span> <span className="text-gray-700">{user.guardian_name}</span></li>
                <li><span className="font-bold w-24 text-blue-500">Additional notes:</span> <span className="text-gray-700">{user.notes}</span></li>
              </ul>
            )}
          </div>
        </div>
      <DashboardMenu/>
      </div>
    </div>
  );
};

export default UserDashboard;
