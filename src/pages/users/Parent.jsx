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
          <div className="hero py-20 bg-slate-200 relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-10 before:opacity-70 max-h-64">
            <img src="https://picsum.photos/1920/850" alt="" className="absolute top-0 left-0 h-full w-full object-cover" />
            <div className="relative z-20 mx-auto max-w-screen-xl flex gap-20 justify-center">
              <div className="w-2/3">
                <span className="text-orange-600 uppercase font-medium mb-4 block">Obanshire Cub scouts</span>
                <h1 className="text-7xl text-white font-extrabold">Parent Dashboard</h1>
                <div className="flex items-center gap-3 text-white my-6 text-4xl"></div>
              </div>
            </div>
          </div>
<div className="flex mx-auto min-w-sm justify-evenly flex-wrap">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 p-6">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.forename} {user.surname}</div>
        <p className="text-gray-700 text-base">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-700 text-base">
          <strong>User Type:</strong> {user.userType}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Disclosure:</strong> {user.disclosure}
        </p>
        <div className="text-gray-700 text-base">

        </div>
      </div>

    </div>          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 p-6">
<div className="  min-w-64 max-w-96">
  <h2 className='font-semibold text-xl'>Disclosure Scotland Information</h2>
  <p>To be able to participate and help with scouting events, you need to contact one of our scout leaders</p>
  <a href="https://www.mygov.scot/basic-disclosure/apply-for-basic-disclosure" target='_blank'>Click here for more information</a>
</div>
</div>
</div>
          <Events />
          
          {user.disclosure === 'true' ? (
            <AvailabilityCalendar />
          ) : (
            <div></div>
          )}
        </>
      ) : (
        <p>Loading user information...</p>
      )}
    </>
  );
};

export default ParentDashboard;
