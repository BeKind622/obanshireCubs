import React from 'react';
import UserInformation from './UserInformation'; // Ensure correct path to the file

const UserTable = ({ users }) => {
  if (!users || users.length === 0) {
    console.error('No users provided or users array is empty:', users);
    return <div>No users to display</div>;
  }

  console.log('Rendering UserTable with users:', users);

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
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Disclosure
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Availability
                  </th>
                </tr>
              </thead>
              <tbody>
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
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {user.disclosure}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <ul>
                        {user.availability?.map((date, index) => (
                          <li key={index} className="text-gray-700">
                            {new Date(date).toLocaleDateString()}
                          </li>
                        ))}
                      </ul>
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
