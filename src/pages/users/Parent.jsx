import React, {useState} from 'react';
import UserInformation from '../../components/UserInformation';
import AvailabilityCalendar from '../../components/Calendar';


const ParentDashboard = () => {
  
  const user = UserInformation();
  // const [value, onChange] = useState<Value>(new Date());

  return (
    <>
      {user ? (
<AvailabilityCalendar/>
) : (
  <p>Loading user information...</p>
)}
    </>
  );
};

export default ParentDashboard;
