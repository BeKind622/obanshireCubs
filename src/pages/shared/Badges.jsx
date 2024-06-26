import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

  const handlePrintBadge = (badgeId) => {
    const badge = filteredBadges.find(badge => badge.id === badgeId);
    if (badge) {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
          <head>
            <title>${badge.name}</title>
            <style>
              /* Add your custom styles for printing here */
              body {
                font-family: Arial, sans-serif;
              }
              .badge-container {
                margin: 20px;
                padding: 20px;
                border: 1px solid #ccc;
              }
              .badge-image {
                max-width: 100px;
                max-height: 100px;
              }
            </style>
          </head>
          <body>
            <div class="badge-container">
              <img src="${badge.image}" alt="${badge.name}" class="badge-image" />
              <h3>${badge.name}</h3>
              <p>${badge.description}</p>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className='bg-white'>
      
      <div className="hero py-40 bg-slate-200 relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-10 before:opacity-70">
  <img src="https://images.unsplash.com/photo-1541797873665-6d4cc148885f?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute top-0 left-0 h-full w-full object-cover" />
  <div className="relative z-20 mx-auto max-w-screen-xl flex gap-20 justify-center">
    <div className="w-2/3">
      <span className="text-orange-600 uppercase font-medium mb-4 block">Obanshire cub scouts</span>
      <h1 className="text-7xl text-white font-extrabold">Badges</h1>
      {/* <h2>{user.userType}</h2> */}
      <div className="flex items-center gap-3 text-white my-6 text-4xl">
      
      </div>
      <p className="text-slate-200">
        Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic proident ullam, eaque donec delectus tempor consectetur nunc, purus congue? Rem volutpat sodales! Mollit. Minus exercitationem wisi. Optio ullamco nullam purus volutpat optio ullamco nullam purus volutpat.
      </p>
      <div className="flex gap-8 mt-10">
        {/* <button className="text-white h-12 bg-orange-700 w-44">
          Read More
        </button>
        <button className="text-white h-12 bg-blue-500 w-44">
          See all offert
        </button> */}
      </div>
    </div>
    <div className="w-1/3">
      
    </div>
  </div>
</div>
  <div class="relative rounded-2xl bg-white px-6 pt-10 pb-8   sm:mx-auto sm:max-w-lg sm:px-10">
    <div class="mx-auto max-w-md ">


      <form action="" class="relative mx-auto w-max">
        <input type="text" 
           onChange={handleSearch}
           value={searchTerm}
              class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none text-black focus:w-full focus:cursor-text  focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>


    </div>
  </div>

      <div className="container flex flex-wrap justify-evenly mx-auto my-9 text-black">
        {filteredBadges.map(badge => (
          <div key={badge.id} className="border border-gray-300 rounded-lg p-4 w-48 text-center shadow-md flex flex-col justify-between"
           >
            
            <img src={badge.image} alt={badge.name} className="badge-image" />
            <h3 className='font-semibold'>{badge.name}</h3>
            <p>{badge.description}</p>
            <button className="bg-blue text-white"onClick={() => handlePrintBadge(badge.id)}>Print!</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
