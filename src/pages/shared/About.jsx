import React from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";
import Events from "../../components/Events";

const About = () => {

    return (
    <>
    {<Events/>}

    <div className="hero py-20 bg-slate-200 relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:z-10 before:opacity-70">
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
    
  </div>
  
</div>    
<div className="flex items-center justify-center min-h-screen bg-logoYellow ">
<div className="flex flex-col  mt-8  ">
      {/* Meet the Team */}
      <div className="container max-w-7xl px-4 bg-white rounded-xl bg-opacity-50">
        {/* Section Header */}
        <div className="flex flex-wrap text-center justify-center mb-24">
          <div className="w-full lg:w-6/12 px-4 ">
            {/* Header */}
            <h1 className="text-gray-900 text-4xl font-bold mb-8">Meet the Team</h1>
            {/* Description */}
            <p className="text-gray-700 text-lg font-light">
              With over 100 years of combined experience, we've got a well-seasoned team at the helm.
            </p>
          </div>
        </div>
        {/* Team Members */}
        <div className="flex flex-wrap justify-center">
          {/* Member #1 */}
          <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              {/* Avatar */}
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="https://plus.unsplash.com/premium_photo-1661558512308-df8c76450c7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tranter Jaskulski"
                />
              </a>
              {/* Details */}
              <div className="text-center mt-6">
                {/* Name */}
                <h1 className="text-gray-900 text-xl font-bold mb-1">Tranter Jaskulski</h1>
                {/* Title */}
                <div className="text-gray-700 font-light mb-2">Cubmaster</div>
                {/* Social Icons */}
                <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                  {/* Linkedin */}
                  <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                    <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                  </a>
                  {/* Twitter */}
                  <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                    <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                    <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Member #2 */}
          <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              {/* Avatar */}
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="https://images.unsplash.com/photo-1621117762076-f9a70dcb7b03?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Denice Jagna"
                />
              </a>
              {/* Details */}
              <div className="text-center mt-6">
                {/* Name */}
                <h1 className="text-gray-900 text-xl font-bold mb-1">Denice Jagna</h1>
                {/* Title */}
                <div className="text-gray-700 font-light mb-2">Assistant Scoutmaster</div>
                {/* Social Icons */}
                <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                  {/* Linkedin */}
                  <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                    <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                  </a>
                  {/* Twitter */}
                  <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                    <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                    <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Member #3 */}
          <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              {/* Avatar */}
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="https://plus.unsplash.com/premium_photo-1664910219302-7a4c7b97da78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Kenji Milton"
                />
              </a>
              {/* Details */}
              <div className="text-center mt-6">
                {/* Name */}
                <h1 className="text-gray-900 text-xl font-bold mb-1">Kenji Milton</h1>
                {/* Title */}
                <div className="text-gray-700 font-light mb-2">Scoutmaster</div>
                {/* Social Icons */}
                <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                  {/* Linkedin */}
                  <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                    <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                  </a>
                  {/* Twitter */}
                  <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                    <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                    <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Member #4 */}
          <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
            <div className="flex flex-col">
              {/* Avatar */}
              <a href="#" className="mx-auto">
                <img
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                  src="https://images.unsplash.com/photo-1617975251517-b90ff061b52e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Manny The Mascot"
                />
              </a>
              {/* Details */}
              <div className="text-center mt-6">
                {/* Name */}
                <h1 className="text-gray-900 text-xl font-bold mb-1">Manny The Mascot</h1>
                {/* Title */}
                <div className="text-gray-700 font-light mb-2">Troop Leader</div>
                {/* Social Icons */}
                <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                  {/* Linkedin */}
                  <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                    <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                  </a>
                  {/* Twitter */}
                  <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                    <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                    <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
{<FAQ/>}
    </>
    )
}

export default About;