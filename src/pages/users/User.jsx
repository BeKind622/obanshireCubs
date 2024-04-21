import React, { useState, useEffect } from 'react';
import moment from 'moment';
import UserInformation from '../../components/UserInformation';
import DashboardMenu from '../../components/DashboardMenu';
const UserDashboard = () => {
const user = UserInformation();

  const formattedDOB = user ? moment(user.dob).format('D/MM/YYYY') : '';
  return (
    <>
      {user && (
        <div>
          <div className="flex ">
            <div className="w-full flex flex-col">
              <div className="flex-1 bg-white g shadow-xl p-8 max-w-30">
                <h2 className='text-black text-lg font-semibold text-center'>Hello, {user.name}</h2>
            <div className="flex justify-evenly">
                <ul key={user._id} className='bg-gray-300 rounded-xl p-5 bg-opacity max-w-xs'>
                <h3 className='text-black text-lg '>Personal info:</h3>
                  <li>
                    <span className="font-bold w-24 text-blue-500">Patient name:</span>{' '}
                    <span className="text-gray-700">{user.name}</span>
                  </li>
                  <li>
                    <span className="font-bold w-24 text-blue-500">Birthday:</span>{' '}
                    <span className="text-gray-700">{formattedDOB}</span>
                  </li>
                  <li>
                    <span className="font-bold w-24 text-blue-500">Email:</span>{' '}
                    <span className="text-gray-700">{user.email}</span>
                  </li>
                  <li>
                    <span className="font-bold w-24 text-blue-500">Guardian name:</span>{' '}
                    <span className="text-gray-700">{user.guardian_name}</span>
                  </li>
                  <li>
                    <span className="font-bold w-24 text-blue-500">Additional notes:</span>{' '}
                    <span className="text-gray-700">{user.appointment_notes}</span>
                  </li>
                  <li>
                    <span className="font-bold w-24 text-blue-500">Department:</span>{' '}
                    <span className="text-gray-700">
                      {user.department_id.name}
                    </span>
                  </li>
                </ul>
                <div className="bg-gray-300 rounded-xl p-5 bg-opacity max-w-xs">
            <h2 className="text-black">Next appointment information:</h2>
            <p className="text-black">Location: {user.department_id.name}</p>
            <p className="text-black">Doctor: {user.department_id.doctor}</p>
            <p className="text-black">Location: {user.department_id.location}</p>
            </div>
              </div>
                <DashboardMenu/>
            </div>

            </div>
            <div className="">
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
