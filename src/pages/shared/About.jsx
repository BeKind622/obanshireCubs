import React from "react";
import { Link } from "react-router-dom";

const About = () => {

    return (
    <>
    <div className="hero py-40 bg-slate-200 relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-10 before:opacity-70">
  <img src="https://picsum.photos/1920/850" alt="" className="absolute top-0 left-0 h-full w-full object-cover" />
  <div className="relative z-20 mx-auto max-w-screen-xl flex gap-20 justify-center">
    <div className="w-2/3">
      <span className="text-orange-600 uppercase font-medium mb-4 block">Obanshire cub scouts</span>
      <h1 className="text-7xl text-white font-extrabold">About us</h1>
      {/* <h2>{user.userType}</h2> */}
      <div className="flex items-center gap-3 text-white my-6 text-4xl">
      
      </div>
      <p className="text-slate-300 text-xl">
        
Welcome to Obanshire Cub Scouts! Established in [year], we are a vibrant and inclusive community organization dedicated to providing young boys and girls aged 7 to 10 with enriching experiences that foster personal growth, leadership skills, and a lifelong love for adventure and exploration. At Obanshire Cub Scouts, we believe in the power of teamwork, outdoor activities, and community engagement to nurture well-rounded individuals who are prepared to tackle life's challenges with confidence and resilience. With a rich history spanning over [number] years, our Cub Scouts program offers a diverse range of activities, from hiking and camping to arts and crafts, all guided by trained leaders who are committed to creating safe and supportive environments for our members. Join us on our journey of fun, friendship, and learning as we embark on exciting adventures and create lasting memories together!
      </p>
      <div className="flex gap-8 mt-10">
        <Link to="/"><button className="text-white h-12 bg-orange-700 w-44" onClick="">
Home        </button></Link>
        
        
      </div>

      
    </div>
    <div className="w-1/3">
      
    </div>
  </div>
  
</div>    

    </>
    )
}

export default About;