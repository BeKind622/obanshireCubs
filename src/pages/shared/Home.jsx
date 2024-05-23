import React from 'react';
import UserInformation from '../../components/UserInformation';
import FAQ from '../../components/FAQ';
import { Link, useLocation } from 'react-router-dom';


const Home = () => {
  const user = UserInformation();
  return (
    <>

      <div className="hero py-40 bg-slate-200 relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-10 before:opacity-70">
  <img src="src/assets/badges/cartoonForest.png" alt="" className="absolute top-0 left-0 h-full w-full object-cover" />
  <div className="relative z-20 mx-auto max-w-screen-xl flex gap-20 justify-center">
    <div className="w-2/3">
      <span className="text-orange-600 uppercase font-medium mb-4 block">EXPLORE. DISCOVER. TRAVEL</span>
      <h1 className="text-7xl text-white font-extrabold">Obanshire cub scouts</h1>
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
<div className="bg-gray-100 flex flex-col h-full">
  <div className="bg-gray-600 btf-image-container">
    <Link to="/Badges" aria-hidden="true" role="presentation" tabIndex="-1">
      <img src="https://prod-cms.scouts.org.uk/media/20744/badges.jpg" className="btf-image" alt="Badges" />
    </Link>
  </div>
  <div className="flex flex-col h-full p-4">
    <Link to="/Badges" className="text-lg mb-1 text-gray-900">Badges</Link>
    <p className="mt-2 btf-text text-gray-700">
      Master something you love, or try something shiny and new. These badges allow a young person to gain whichever badge is appropriate to the level they have reached.
    </p>
    <Link to="/Badges" className="text-gray-900 font-bold mt-auto">Explore badges &gt;</Link>
  </div>
</div>


{<FAQ/>}
    </>
  );
};
export default Home;
