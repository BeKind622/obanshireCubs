import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const Badges = () => {
  const [badges, setBadges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBadges, setFilteredBadges] = useState([]);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get('src/json/badges.json');
        setBadges(response.data);
        setFilteredBadges(response.data);
      } catch (error) {
        console.error('Error fetching badges:', error);
      }
    };

    fetchBadges();
  }, []);

  useEffect(() => {
    const results = badges.filter(badge =>
      badge.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBadges(results);
  }, [searchTerm, badges]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      
  <div class="relative rounded-2xl bg-white px-6 pt-10 pb-8   sm:mx-auto sm:max-w-lg sm:px-10">
    <div class="mx-auto max-w-md">


      <form action="" class="relative mx-auto w-max">
        <input type="text" 
           onChange={handleSearch}
           value={searchTerm}
              class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text  focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>


    </div>
  </div>

      <div className="badges-container">
        {filteredBadges.map(badge => (
          <div key={badge.id} className="badge">
            <img src={badge.image} alt={badge.name} className="badge-image" />
            <h3>{badge.name}</h3>
            <p>{badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
