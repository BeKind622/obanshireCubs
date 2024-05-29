import React from 'react';
import AllUserInformation from './AllUserInformation'; // Ensure correct path to the file

const UserTable = () => {
  const { users, error } = AllUserInformation(); // Fetch all users using the custom hook
  const token = localStorage.getItem('token');
  console.log('Token found:', token); // Debugging log
  
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    #
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    First name
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Last name
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    User type
                  </th>
                </tr>
              </thead>
              <tbody>
                {error && (
                  <tr>
                    <td colSpan="4" className="text-sm text-red-500 text-center px-6 py-4">
                      {error}
                    </td>
                  </tr>
                )}
                {users.map((user, index) => (
                  <tr key={user._id} className="bg-white border-b">
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.forename}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.surname}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.userType}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
