import React from 'react';
import {Link} from 'react-router-dom';

const Game = ({image, url, name, description}) => {
return (
    <>
    
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md gameTile max-h-96 p-2 my-2">
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {name}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      {description}
    </p>
    <img src={image} alt="Game cover" />
  </div>
  <div className="p-6 pt-0">
  <Link to={url} target="_blank">
    <div>
    <button
      className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true" 
      >
Play here!    </button>
    </div>

  </Link>
      </div>
</div>



    
    </>
)}

export default Game