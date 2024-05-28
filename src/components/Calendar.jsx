// AvailabilityCalendar.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserInformation from './UserInformation';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AvailabilityCalendar = () => {
  const user = UserInformation();
  const [selectedDates, setSelectedDates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('User in AvailabilityCalendar:', user); // Log user data
  }, [user]);

  const onDateChange = (date) => {
    // Update selected dates state
    setSelectedDates(date);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/availability',
        {
          availability: selectedDates,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert('Availability successfully updated');
        navigate('/success');
      }
    } catch (error) {
      console.log('Selected Dates:', selectedDates);
      console.error('Error submitting availability:', error);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <h2>Select Your Availability</h2>
      <form onSubmit={handleSubmit}>
        <Calendar onChange={onDateChange} value={selectedDates} selectRange={true} />
        <button type="submit">Submit Availability</button>
      </form>
    </div>
  );
};

export default AvailabilityCalendar;
