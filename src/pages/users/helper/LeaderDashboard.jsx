import React from "react";
import UserTable from "../../../components/UserTable";

const LeaderDashboard = ({ users }) => {
  console.log('LeaderDashboard users:', users);

  return (
    <>
      {users && <UserTable users={users} />}
    </>
  );
};

export default LeaderDashboard;
