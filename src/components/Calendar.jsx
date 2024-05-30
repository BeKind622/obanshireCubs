// AvailabilityCalendar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserInformation from './UserInformation';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AvailabilityCalendar = () => {
  const user = UserInformation();
  const [selectedDates, setSelectedDates] = useState([]);
  const [existingAvailability, setExistingAvailability] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log('User in AvailabilityCalendar:', user); // Log user data

      // Fetch existing availability if available
      if (user.availability) {
        setExistingAvailability(user.availability.map(date => new Date(date)));
      }
    }
  }, [user]);

  const onDateChange = (date) => {
    setSelectedDates(date);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/availability',
        { availability: selectedDates },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        alert('Availability successfully updated');
        navigate('/');
      }
    } catch (error) {
      console.log('Selected Dates:', selectedDates);
      console.error('Error submitting availability:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100  flex flex-col justify-evenly md:flex-row mx-auto">
      <div>
      <h2 className="text-2xl font-semibold mb-4">Select Your Availability</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <Calendar
          onChange={onDateChange}
          value={selectedDates}
          selectRange={true}
          tileClassName={({ date }) => {
            if (existingAvailability.find(d => d.getTime() === date.getTime())) {
              return 'bg-blue-200'; // Add a custom class for existing availability dates
            }
            return null;
          }}
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit Availability
        </button>
      </form>
      </div>

      {existingAvailability.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Existing Availability</h3>
          <ul className="list-disc pl-5">
            {existingAvailability.map((date, index) => (
              <li key={index} className="text-gray-700">
                {date.toDateString()}
              </li>
            ))}
          </ul>
        </div>
      )}

     
    </div>
  );
};

export default AvailabilityCalendar;
