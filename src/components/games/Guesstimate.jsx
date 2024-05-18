import React from 'react';

function GuessingGame() {
  return (
    <div>
      <h2>Card Match Game</h2>
      <iframe 
        src="https://guesstimategame.io/" 
        width="auto" 
        height="auto" 
        style={{ border: 'none' }}
        title="OpenAI Website"
      ></iframe>
    </div>
  );
}

export default GuessingGame;
