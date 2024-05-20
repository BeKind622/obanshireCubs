import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Badges.css';

const Badges = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get('/data/badges.json');
        setBadges(response.data);
      } catch (error) {
        console.error('Error fetching badges:', error);
      }
    };

    fetchBadges();
  }, []);

  return (
    <div className="badges-container">
      {badges.map(badge => (
        <div key={badge.id} className="badge">
          <img src={badge.image} alt={badge.name} className="badge-image" />
          <h3>{badge.name}</h3>
          <p>{badge.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Badges;
