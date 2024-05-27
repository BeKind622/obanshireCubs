import React, { useState, useEffect } from 'react';
import UserInformation from '../../components/UserInformation';
import ParentDashboard from './Parent'; // Import ParentDashboard component
import CubDashboard from './CubDashboard'; // Import CubDashboard component
import LeaderDashboard from './helper/LeaderDashboard';

const Dashboard = () => {
  const user = UserInformation();

  // Function to render the appropriate dashboard based on the userType
  const renderDashboard = () => {
    switch (user?.userType) {
      case 'parent':
        return <ParentDashboard />;
      case 'leader':
        return <LeaderDashboard />;
      case 'scout':
        return <CubDashboard />;
      default:
        return null; // Render nothing if userType is not recognized or user is not logged in
    }
  };

  return (
    <>
      {user ? (
        <div className='bg-white'>
          <div className="max-w-xl py-5 mx-8 ">
            <h1 className="font-black text-blue-900 text-4xl mb-4">Welcome, {user.foreame}</h1>
            
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
