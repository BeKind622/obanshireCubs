import React, {useState} from 'react';
import UserInformation from '../../components/UserInformation';
import AvailabilityCalendar from '../../components/Calendar';


const ParentDashboard = () => {
  
  const user = UserInformation();
  // const [value, onChange] = useState<Value>(new Date());

  return (
    <>
      {user ? (
        // <div className="bg-logoYellow bg-opacity-50 max-w-80 rounded-xl flex flex-col justify-between min-h-96">
        //   <h2 className='text-3xl mx-auto py-6'>User Information</h2>
        //   <div className='flex flex-col justify-evenly min-h-72 mx-auto text-xl'>
        //   <p><strong>Email:</strong> {user.email}</p>
        //   <p><strong>User Type:</strong> {user.userType}</p>
        //   <p><strong>Forename:</strong> {user.forename}</p>
        //   <p><strong>Surname:</strong> {user.surname}</p>
        //   {/* Add other fields as needed */}
        // </div>
        // </div>
<AvailabilityCalendar/>
) : (
  <p>Loading user information...</p>
)}
    </>
  );
};

export default ParentDashboard;
