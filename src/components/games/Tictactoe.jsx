import React from 'react';

function TictactoeGame() {
  return (
    <div className="h-full">
      <h2>Card Match Game</h2>
      <iframe 
        src="https://tic-tac-toe.awwsmm.com/" 
        width="100%" 
         height="100%"  
        style={{ border: 'none', display: "block" }}
        title="OpenAI Website"
      ></iframe>
    </div>
  );
}

export default TictactoeGame;
