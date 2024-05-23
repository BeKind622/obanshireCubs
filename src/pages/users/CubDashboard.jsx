import React from 'react';
import UserInformation from '../../components/UserInformation';

const CubDashboard = () => {
  const user = UserInformation();

  return (
    <>
      {user ? (
        <div className="user-info">
          <h1>User Information</h1>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>User Type:</strong> {user.userType}</p>
          <p><strong>Forename:</strong> {user.forename}</p>
          <p><strong>Surname:</strong> {user.surname}</p>
          {/* Add other fields as needed */}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </>
  );
};

export default CubDashboard;
