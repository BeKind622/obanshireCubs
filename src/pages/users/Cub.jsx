import React, { useState, useEffect } from 'react';
import moment from 'moment';
import UserInformation from '../../components/UserInformation';
import DashboardMenu from '../../components/DashboardMenu';
const CubDashboard = () => {
const user = CubInformation();

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
            <div class="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
  <div class="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
    
    <h1 class="mt-6 flex justify-center gap-1 font-sans text-2xl font-bold tracking-normal text-white antialiased">
    Personal information:
    </h1>
  </div>
  <div class="p-0">
    <ul class="flex flex-col gap-4">
      
      <li class="flex items-center gap-4">
        <span class="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="h-3 w-3"
          >
            
          </svg>
        </span>
        <li>
                    <span className="font-bold w-24 text-blue-700">Patient name:</span>{' '}
                    <span className="">{user.name}</span>
                  </li>
      </li>
      <li class="flex items-center gap-4">
        <span class="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="h-3 w-3"
          >
            
          </svg>
        </span>
        <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        <li>
                    <span className="font-bold w-24 text-blue-700">Birthday:</span>{' '}
                    <span className="">{formattedDOB}</span>
                  </li>
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="h-3 w-3"
          >
            
          </svg>
        </span>
        <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        <li>
                    <span className="font-bold w-24 text-blue-700">Email:</span>{' '}
                    <span className="">{user.email}</span>
                  </li>
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="h-3 w-3"
          >
            
          </svg>
        </span>
        <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        <li>
                    <span className="font-bold w-24 text-blue-700">Guardian name:</span>{' '}
                    <span className="">{user.guardian_name}</span>
                  </li>
        </p>
      </li>
    </ul>
  </div>
  <div class="mt-12 p-0">
  
  </div>
</div>
                {/* <ul key={user._id} className='bg-gradient-to-r from-blue-200 to-cyan-200 rounded-xl p-5 bg-opacity max-w-xs'>
                <h3 className='text-black text-lg '>Personal info:</h3>
                  <li>
                    <span className="font-bold w-24 text-blue-700">Patient name:</span>{' '}
                    <span className="">{user.name}</span>
                  </li>
                  <li>
                    <span className="font-bold w-24 text-blue-700">Birthday:</span>{' '}
                    <span className="">{formattedDOB}</span>
                  </li>
                  <li>
                    <span className="font-bold w-24 text-blue-700">Email:</span>{' '}
                    <span className="">{user.email}</span>
                  </li>
                  <li>
                    <span className="font-bold w-24 text-blue-700">Guardian name:</span>{' '}
                    <span className="">{user.guardian_name}</span>
                  </li>
                  <li>
                    <span className="font-bold w-24 text-blue-700">Additional notes:</span>{' '}
                    <span className="">{user.appointment_notes}</span>
                  </li>
                  <li>
                    <span className="font-bold w-24 text-blue-700">Department:</span>{' '}
                    <span className="">
                      {user.department_id.name}
                    </span>
                  </li>
                </ul> */}
                {/* DOC CARD */}
              <div>
              <div class="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
  <div class="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
    
    <h1 class="mt-6 flex justify-center gap-1 font-sans text-2xl font-bold tracking-normal text-white antialiased">
    Next appointment information:
    </h1>
  </div>
  <div class="p-0">
    <ul class="flex flex-col gap-4">
      <li class="flex items-center gap-4">
      
      </li>
      <li class="flex items-center gap-4">
        <span class="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="h-3 w-3"
          >
            
          </svg>
        </span>
        <li>Department: {user.department_id.name}</li>
      </li>
      <li class="flex items-center gap-4">
        <span class="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="h-3 w-3"
          >
            
          </svg>
        </span>
        <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        <li>Appointment location: Children's hospital - {user.department_id.location}</li>
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="h-3 w-3"
          >
            
          </svg>
        </span>
        <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        <li>Head of dept: {user.department_id.doctor}</li>
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            class="h-3 w-3"
          >
            
          </svg>
        </span>
        <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        <li>For more info about your appointment:</li>
        </p>
      </li>
    </ul>
  </div>
  <div class="mt-12 p-0">
  <a href={user.department_id.video} target="_blank">
    <button
      class="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >More info
      
    </button>
    </a>
  </div>
</div>

              </div>
                
              </div>
              
            </div>

            </div>
           
          </div>
        </div>
      )}
    </>
  );
};

export default CubDashboard;
