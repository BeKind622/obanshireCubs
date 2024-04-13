import React from 'react';
// import {Link, useLocation} from 'react-router-dom';
import doctors from '../json/doctors'

const docInfo = ({})
const DashboardMenu = () =>{

    return <>
    
        <div className='bg-white'>

    <div className="flex flex-wrap">
        <div className=" grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 scale-50">
  <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div className="to-bg-black-10 inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div className="relative p-6 py-14 px-6 md:px-12">
    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      Office room: {office}
    </h2>
    <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
      {name}
    </h5>
    <img
      alt="tania andrew"
      src={profilePic}
      className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
    />
  </div>
</div>



        </div>
        
        
        </div>
    </>
}

export default DashboardMenu;