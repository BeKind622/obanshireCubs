import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests

const DoctorInfo = () => {
    const [userData, setUserData] = useState(null);
    const [doctorName, setDoctorName] = useState(null);

    useEffect(() => {
        // Fetch user data
        axios.get('/api/user-profile') // Example API endpoint to fetch user data
            .then(response => {
                setUserData(response.data);
                // Fetch doctor data using doctor_id
                return axios.get(`/api/doctors/${response.data.doctor_id}`); // Example API endpoint to fetch doctor data
            })
            .then(response => {
                setDoctorName(response.data.name);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <div>
            {user && (
                <div>
                    <h2>User Profile</h2>
                    <p>Email: {userData.email}</p>
                    <p>Patient Name: {userData.patient_name}</p>
                    <p>Doctor Name: {doctorName}</p> {/* Display doctor name */}
                    {/* Other user data */}
                </div>
            )}
        </div>
    );
};

export default DoctorInfo;
