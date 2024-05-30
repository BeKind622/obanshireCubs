import React from 'react';

const TestimonialPage = () => {
  return (
    <div className="w-full bg-indigo-100">
      <div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6">
        
        {/* Testimonial about Daniel Clifford */}
        <div className="bg-logoYellow lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0">
          <div className="mx-6 my-8 2xl:mx-10">
            <img className="w-10 h-10 2xl:w-20 2xl:h-20 rounded-full border-2 ml-3 2xl:ml-0 2xl:-mt-4" src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 className="text-white text-base 2xl:text-2xl pl-16 2xl:pl-20 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-20 2xl:mx-8">Daniel Clifford</h1>
            <h2 className="text-white text-opacity-50 text-base 2xl:text-2xl pl-16 2xl:pl-20 2xl:my-2 2xl:mx-8">Parent</h2>
          </div>
          <div className="-mt-6 relative">
            <p className="text-white text-xl 2xl:text-4xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">"The scout program was incredibly engaging and enriching for my son. The skills he learned and the friends he made are invaluable. The leaders are passionate and dedicated to the children's growth."</p>
            <br />
            <p className="text-white text-opacity-50 font-medium text-sm 2xl:text-3xl px-7 lg:px-9 mb-3 2xl:pb-8 2xl:mx-2">"The team at the scout organization is fantastic! They create a supportive and fun environment for the kids. My daughter looks forward to every scout meeting and the activities they plan."</p>
          </div>
        </div>
        
        {/* Testimonial about Jonathan Walters */}
        <div className="bg-gray-200 lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
          <div className="mx-8 2xl:mx-10 my-10">
            <img className="w-10 h-10 2xl:w-20 2xl:h-20 rounded-full border-2 -ml-1 -mt-2 lg:-mt-4" src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 className="text-gray-800 text-base 2xl:text-2xl pl-12 2xl:pl-24 -mt-8 md:-mt-10 2xl:-mt-16">Jonathan Walters</h1>
            <h2 className="text-gray-600 text-opacity-50 text-base 2xl:text-2xl pl-12 2xl:pl-24">Parent</h2>
          </div>
          <div className="-mt-8 mx-1 lg:mx-2">
            <p className="text-gray text-lg lg:text-xl 2xl:text-4xl font-semibold pt-1 px-6 2xl:px-8 lg:pl-5 lg:pr-8">The team was very supportive and kept my child motivated</p>
            <br />
            <p className="text-gray text-opacity-50 font-medium text-sm 2xl:text-3xl pl-6 lg:pl-5 pr-4 -mt-1 lg:mt-6 2xl:mt-2 2xl:px-8">"My son has had an overall wonderful and rewarding experience with the scouts. He has grown so much in confidence and skills. I highly recommend this program to other parents."</p>
          </div>
        </div>
        
        {/* Testimonial about Jeanette Harmon */}
        <div className="bg-logoYellow lg:order-3 lg:row-span-2 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8">
          <div className="mx-8 my-10 lg:my-8">
            <img className="w-11 h-11 2xl:w-20 2xl:h-20 rounded-full border-2 -mt-3" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 className="text-gray-800 text-base 2xl:text-2xl pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">Jeanette Harmon</h1>
            <h2 className="text-gray-600 text-base 2xl:text-2xl pl-14 2xl:pl-24">Parent</h2>
          </div>
          <div className="-mt-4 ml-5 mr-11">
            <p className="text-gray-800 text-xl 2xl:text-4xl font-bold px-3 -mt-6 lg:-mt-5 2xl:mt-12 2xl:pb-6">An overall wonderful and rewarding experience</p>
            <br />
            <p className="text-gray-500 font-medium text-sm 2xl:text-3xl pl-3 lg:pr-4 mb-6 2xl:pt-2 -mt-3">"This scout organization is life-changing. The experiences and skills my son has gained are unparalleled. The program is well-structured and the staff is amazing. Highly recommended!"</p>
          </div>
        </div>
        
        {/* Testimonial about Patrick Abrams */}
        <div className="bg-purple-800 lg:order-4 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl mb-5 lg:mb-0 2xl:mb-8 lg:pb-14 2xl:pb-20">
          <div className="mx-8 my-8">
            <img className="w-10 h-10 2xl:w-20 2xl:h-20 rounded-full border-2 lg:-mt-3" src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 className="text-white text-base 2xl:text-2xl pl-14 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">Patrick Abrams</h1>
            <h2 className="text-white text-opacity-50 text-base 2xl:text-2xl pl-14 2xl:pl-24">Parent</h2>
          </div>
          <div className="px-3 -mt-3 mb-5 lg:mb-0">
            <p className="text-white text-lg 2xl:text-4xl font-semibold px-4 -mt-3 lg:-mt-6 2xl:mt-8">The leaders are passionate and dedicated to the children's growth</p>
            <br />
            <p className="text-white text-opacity-50 font-medium text-sm 2xl:text-3xl px-4 2xl:mt-4 2xl:mb-8">"The scout program provided a supportive and fun environment for my children. They have grown in confidence and skills, and the leaders are truly dedicated to their development. Highly recommended!"</p>
          </div>
        </div>
        
        {/* Testimonial about Kira Whittle */}
        <div className="bg-white lg:order-5 lg:row-span-2 2xl:row-span-1 col-span-2 rounded-lg shadow-xl lg:pb-8 2xl:pb-10">
          <div className="mx-8 my-8">
            <img className="w-11 h-11 2xl:w-20 2xl:h-20 rounded-full border-2 lg:-mt-3" src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 className="text-gray-800 text-base 2xl:text-2xl pl-16 2xl:pl-24 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-16">Kira Whittle</h1>
            <h2 className="text-gray-500 text-base 2xl:text-2xl pl-16 2xl:pl-24">Parent</h2>
          </div>
          <div className="-mt-2 lg:mt-2 2xl:mt-6 ml-5 mr-9">
            <p className="text-gray-800 text-lg 2xl:text-4xl font-bold px-3 2xl:pb-6">The experiences and skills my child has gained are unparalleled</p>
            <br />
            <p className="text-gray-500 font-medium text-sm 2xl:text-3xl pl-3 lg:pr-4 mb-6 2xl:pt-2 -mt-3">"Before joining the scout organization, my child was shy and reserved. Now, they have grown so much in confidence and skills. The experiences they've had and the friendships they've made are truly invaluable. I can't recommend this program enough!"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
