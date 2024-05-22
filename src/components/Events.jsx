import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('src/json/events.json'); // Update the path if necessary
        setEvents(response.data.events);
        setFilteredEvents(response.data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
    
    <div className="flex flex-col mt-8 bg">
    
      <h1 className='text-center'>Events</h1>
     
        <div className="flex mx-auto justify-evenly w-screen">
          
        {filteredEvents.map(event => (
          <div key={event.id} className="event container max-w-xs max-h-xs">
            <img src={event.coverImage} alt={event.name} className="event-image max-w-30 w-auto" />
            <h3 className='font-semibold text-2xl'>{event.name}</h3>
            <p>{event.description}</p>
          </div>
        ))}
        
        </div>
        
      </div>
      </>
  );
};

export default Events;
