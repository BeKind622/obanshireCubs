import React from 'react';

function CardmatchGame() {
  return (
    <div className="h-full">
      <h2>Card Match Game</h2>
      <iframe 
        src="https://gifcentration-2.vercel.app/" 
        width="100%" 
        height="100%" 
        style={{ border: 'none', display: "block" }}
        title="Card Match Game"
      ></iframe>
    </div>
  );
}

export default CardmatchGame;
