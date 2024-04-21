import React from 'react';
import doctors from '../json/doctors';

const DoctorInfo = () => {
    return (
        
            <div className='flex bg-slate-100 '>
                {doctors.map((doctor, index) => (
                    <div key={index}>
                        
            <div className="">
                <div className="">
                    <div className="grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 scale-50">
                        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                            <div className="to-bg-black-10 inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                        </div>
                        <div className="relative p-6 py-14 px-6 md:px-12">
                            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            {doctor.name}
                            </h2>
                            <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                            Office room: {doctor.office}
                            </h5>
                            <img
                                alt={doctor.name}
                                src={doctor.profilePic}
                                className="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
                                />
                        </div>
                    </div>
                </div>
            </div>
                          </div>
                              ))}
                              </div>
                              
    );
}

export default DoctorInfo;
