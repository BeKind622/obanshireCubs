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
          <div className="flex flex-col">
            <div className="w-full flex flex-col">
              <div className="flex-1 bg-white rounded-lg shadow-xl p-8 max-w-30">
                <ul key={user._id}>
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
                    <span className="text-gray-700">{user.notes}</span>
                  </li>
                  <li>
                    <span className="font-bold w-24 text-blue-500">Department:</span>{' '}
                    <span className="text-gray-700">
                      {/* {user.department_id.name} */}
                    </span>
                  </li>
                </ul>
                <DashboardMenu/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
