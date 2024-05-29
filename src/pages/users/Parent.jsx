import React, { useState } from 'react';
import UserInformation from '../../components/UserInformation';
import AvailabilityCalendar from '../../components/Calendar';
import Events from '../../components/Events';

const ParentDashboard = () => {
  const user = UserInformation();
  // const [value, onChange] = useState<Value>(new Date());

  return (
    <>
      {user ? (
        <>
          <AvailabilityCalendar />
          <Events />
        </>
      ) : (
        <p>Loading user information...</p>
      )}
    </>
  );
};

export default ParentDashboard;
