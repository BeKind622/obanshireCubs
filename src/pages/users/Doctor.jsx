import React from 'react';
import DoctorComponent from '../../components/DoctorComponent'; // Assuming DoctorComponent is the component to render each doctor
import doctorData from '../../json/doctors.json'; // Assuming doctorData contains an array of doctor objects

const Doctors = () => {
    return (
        <>
            <div className="w-screen h-screen overflow-hidden relative flex justify-evenly flex-wrap">
                {doctorData.map((doctor, index) => (
                    <DoctorComponent 
                        key={index}
                        name={doctor.name}
                        office={doctor.office}
                        profilePic={doctor.profilePic}
                    /> 
                ))}
            </div>
        </>
    )
}

export default Doctors;