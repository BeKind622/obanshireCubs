import React, {useState} from "react";
import CardmatchGame from "../../components/games/Cardmatch";
import TictactoeGame from "../../components/games/Tictactoe";
import GuessingGame from "../../components/games/Guesstimate";

const Games = () => {

    const [openTab, setOpenTab] = useState(1);

  return (
    <div className="bg-gray-100 font-sans  h-screen items-center justify-center">
      <div className="p-8">
        <div className="">
          <div className="mb-4 flex  p-2 bg-white rounded-lg shadow-md">
            <button
              onClick={() => setOpenTab(1)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                openTab === 1 ? 'bg-blue-600 text-white' : ''
              }`}
            >
              Card Match
            </button>
            <button
              onClick={() => setOpenTab(2)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                openTab === 2 ? 'bg-blue-600 text-white' : ''
              }`}
            >
              Tic-Tac-Toe
            </button>
            <button
              onClick={() => setOpenTab(3)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
                openTab === 3 ? 'bg-blue-600 text-white' : ''
              }`}
            >
              Section 3
            </button>
          </div>

          {openTab === 1 && (
            <div className="transition-all duration-300 h-screen bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
              {<CardmatchGame />}
            </div>
          )}

          {openTab === 2 && (
            <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
            {<TictactoeGame/>}
            </div>
          )}

          {openTab === 3 && (
            <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
              {<GuessingGame/>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Games;