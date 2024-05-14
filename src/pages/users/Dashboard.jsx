import React, { useState, useEffect } from 'react';
import UserInformation from '../../components/UserInformation';
import ParentDashboard from './Parent'; // Import ParentDashboard component
import HelperDashboard from './helper/HelperDashboard';
import CubDashboard from './CubDashboard'; // Import CubDashboard component

const Dashboard = () => {
  const user = UserInformation();

  // Function to render the appropriate dashboard based on the userType
  const renderDashboard = () => {
    switch (user?.userType) {
      case 'parent':
        return <ParentDashboard />;
      case 'leader':
        return <HelperDashboard />;
      case 'scout':
        return <CubDashboard />;
      default:
        return null; // Render nothing if userType is not recognized or user is not logged in
    }
  };

  return (
    <>
      {user && (
        <div>
          <div className="max-w-xl py-5 mx-8">
            <h1 className="font-black text-blue-900 text-4xl mb-4">Welcome, {user.forename} </h1>
          </div>
          {renderDashboard()}
        </div>
      )}
      {/* Render appropriate dashboard */}
    </>
  );
};

export default Dashboard;
