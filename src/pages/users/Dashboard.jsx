import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInformation from '../../components/UserInformation';
import ParentDashboard from './Parent'; // Import ParentDashboard component
import CubDashboard from './CubDashboard'; // Import CubDashboard component
import LeaderDashboard from './helper/LeaderDashboard';

const Dashboard = () => {
  const user = UserInformation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Dashboard component mounted or updated');
    console.log('Current user:', user);

    if (user?.userType === 'leader' || user?.userType === undefined) {
      // Fetch all users only if the user is a leader
      const fetchAllUsers = async () => {
        try {
          console.log('Fetching all users because user is a leader or userType is undefined');
          const token = localStorage.getItem('token');
          console.log('Retrieved token:', token);

          if (!token) {
            console.error('No token found in localStorage');
            return;
          }

          const response = await axios.get('http://localhost:5000/api/users', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log('Fetched users:', response.data);
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };

      fetchAllUsers();
    }
  }, [user]);

  // Function to render the appropriate dashboard based on the userType
  const renderDashboard = () => {
    console.log('Rendering dashboard for user type:', user?.userType);

    switch (user?.userType) {
      case 'parent':
        return <ParentDashboard />;
      case 'leader':
      case undefined: // Handle undefined userType by redirecting to LeaderDashboard
        return <LeaderDashboard users={users} />; // Pass users to LeaderDashboard
      case 'scout':
        return <CubDashboard />;
      default:
        return null; // Render nothing if userType is not recognized or user is not logged in
    }
  };

  return (
    <>
      {user ? (
        <div>
          <div className="max-w-xl py-5 mx-8">

      </div>
          {renderDashboard()}
        </div>
      ) : (
        <div className="h-60 text-6xl text-center my-20"> Oops! Looks like you are not logged in!</div> // Empty div for not logged-in users
      )}
    </>
  );
};

export default Dashboard;
