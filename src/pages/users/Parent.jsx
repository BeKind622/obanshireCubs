import React from 'react';
import UserInformation from '../../components/UserInformation';
import AvailabilityCalendar from '../../components/Calendar';

const ParentDashboard = () => {
  const { user, error } = UserInformation(); // Destructure to get user and error

  if (error) {
    return <p className='text-black'>{error}</p>;
  }

  return (
    <div className='bg-gray-100'>
      {user ? (
        user.disclosure ? (
          <AvailabilityCalendar />
        ) : (
          <p className='text-black'>User does not have disclosure set to true.</p>
        )
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default ParentDashboard;
