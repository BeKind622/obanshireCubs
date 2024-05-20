import React from 'react';

function GuessingGame() {
  return (
    <div className="h-full">
      <h2>Card Match Game</h2>
      <iframe 
        src="https://guesstimategame.io/" 
        width="100%" 
         height="100%" 
        style={{ border: 'none', display: "block" }}
        title="OpenAI Website"
      ></iframe>
    </div>
  );
}

export default GuessingGame;
