import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserInformation from './UserInformation';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const AvailabilityCalendar = () => {
  const user = UserInformation();
  const [selectedDates, setSelectedDates] = useState([]);
  const navigate = useNavigate();

  const onDateChange = (date) => {
    // Update selected dates state
    setSelectedDates(date);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('/api/users/availability', {
        userId: user._id, // Correctly access the user's ID
        availability: selectedDates
      });
  
      if (response.status === 200) {
        alert('Availability successfully updated');
        navigate('/success');
      }
    } catch (error) {
        console.log(selectedDates)
      console.error('Error submitting availability:', error);
      // Handle error appropriately
    }
  };
  
  return (
    <div>
      <h2>Select Your Availability</h2>
      <form onSubmit={handleSubmit}>
        <Calendar
          onChange={onDateChange}
          value={selectedDates}
          selectRange={true} // Enable date range selection
        />
        <button type="submit">Submit Availability</button>
      </form>
    </div>
  );
};

export default AvailabilityCalendar;
