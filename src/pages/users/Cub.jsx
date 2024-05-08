import React, { useState, useEffect } from 'react';
import UserInformation from '../../components/UserInformation';


const CubDashboard = () => {

const user = UserInformation();
  return(
    <>
    <p>test</p>
    {user && (
  <div>
    <div className="max-w-xl py-5 mx-8">
      <h1 className="font-black text-blue-900 text-4xl mb-4">Welcome back, {user.forename} </h1>
    </div>
    </div>
  )}
    </>
  )
  
    
}
export default CubDashboard;
