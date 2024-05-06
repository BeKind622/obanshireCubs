import React, { useEffect, useState } from 'react';
import UserInformation from '../../components/UserInformation';
import moment from 'moment';
const ParentDashboard = () => {
  const user = UserInformation();
  const formattedDOB = user ? moment(user.dob).format('D/MM/YYYY') : '';

  return (


<>
{user && (
  <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">Hello, {user.guardian_name}
      {/* <br class="hidden sm:block">Selfies Wayfarers/> */}
    </h1>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex">
      <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        
        <div class="flex-grow pl-6">
          <h2 class="text-white text-lg title-font font-medium mb-2">Patient details: </h2>
          <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Patient number: {user.patient_number}</li>
            <li>Appointment date: {formattedDOB}</li>
          </ul>
          
        </div>
        
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        
        <div class="flex-grow pl-6">
          
          <h2 class="text-white text-lg title-font font-medium mb-2">Appointment Details</h2>
         
         <ul>
            <li>Department: {user.department_id.name}</li>
            <li>Head of dept: {user.department_id.doctor}</li>
            <li>Appointment location: Children's hospital - {user.department_id.location}</li>
            <li>For more info about your appointment: <a href={user.department_id.video} target="_blank">Click here</a></li>
          </ul>
        </div>
        
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
        <h2 class="text-white text-lg title-font font-medium mb-2">Doctor details: </h2>
          <ul>
            <li>Name: Dr. {user.doctor_id.name}</li>
            <li>Email: {user.doctor_id.email}</li>
            <li>Medical ID: {user.doctor_id.medicalID}</li>
          </ul>
            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"> */}
            {/* </svg> */}
        </div>
      </div>
    </div>
  </div>
</section>

)}
<DashboardMenu/>
</>
  )


};

export default ParentDashboard;

