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
    <div className="flex flex-col mt-8">
      {/* Meet the Team */}
      <div className="container max-w-7xl px-4">
        {/* Section Header */}
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            {/* Header */}
            <h1 className="text-gray-900 text-4xl font-custom mb-8">Meet the Team</h1>
            {/* Description */}
          </div>
        </div>
        {filteredEvents.map(event => (
          <div key={event.id} className="event container max-w-m">
            <img src={event.coverImage} alt={event.name} className="event-image" />
            <h3>{event.name}</h3>
            <p>{event.description}</p>
          </div>
          
        ))}
        
      </div>
    </div>
  );
};

export default Events;
