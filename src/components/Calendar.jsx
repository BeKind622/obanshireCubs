import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserInformation from './UserInformation';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AvailabilityCalendar = () => {
  const { user, error } = UserInformation(); // Destructure to get user and error
  const [selectedDates, setSelectedDates] = useState([]);
  const navigate = useNavigate();

  const onDateChange = (date) => {
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
        navigate('/Dashboard');
      }
    } catch (error) {
      console.log('Selected Dates:', selectedDates);
      console.error('Error submitting availability:', error);
    }
  };

  if (error) {
    return <p className='text-black'>{error}</p>;
  }

  if (!user) {
    return <p className='text-black'>User data not found.</p>;
  }

  return (
    <div>
      <h2 className='text-gray-900'>Select Your Availability</h2>
      <form onSubmit={handleSubmit}>
        <Calendar onChange={onDateChange} value={selectedDates} selectRange={true} />
        <button type="submit">Submit Availability</button>
      </form>
    </div>
  );
};

export default AvailabilityCalendar;



// VVVVVVVVVVVVVVVV working code VVVVVVVVVVVVVVVVVVV
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import UserInformation from './UserInformation';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const AvailabilityCalendar = () => {
//   const [user, setUser] = useState(null);
//   const [selectedDates, setSelectedDates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const userData = await UserInformation(); // Await the user data
//         setUser(userData);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching user data');
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const onDateChange = (date) => {
//     setSelectedDates(date);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const token = localStorage.getItem('token');
//     try {
//       const response = await axios.post(
//         'http://localhost:5000/api/users/availability',
//         {
//           availability: selectedDates,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         alert('Availability successfully updated');
//         navigate('/Dashboard');
//       }
//     } catch (error) {
//       console.log('Selected Dates:', selectedDates);
//       console.error('Error submitting availability:', error);
//     }
//   };

 
//   if (error) {
//     return <p className='text-black'>{error}</p>;
//   }

//   if (!user) {
//     return <p className='text-black'>User data not found.</p>;
//   }

//   if (!user.disclosure) {
//     return <p className='text-black'>User does not have disclosure set to true.</p>;
//   }

//   return (
//     <div>
//       <h2 className='text-gray-900'>Select Your Availability</h2>
//       <form onSubmit={handleSubmit}>
//         <Calendar onChange={onDateChange} value={selectedDates} selectRange={true} />
//         <button type="submit">Submit Availability</button>
//       </form>
//     </div>
//   );
// };

// export default AvailabilityCalendar;
