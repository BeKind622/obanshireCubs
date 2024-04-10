import React from 'react';
import Game from '../../components/Game';
import gameData from '../../json/games.json';

const Games = () => {
    return (
        <>
        <div className="w-screen h-screen overflow-hidden relative flex justify-evenly flex-wrap">
        {gameData.map((game, index) => (
            <Game 
            key ={index}
            name = {game.name}
            url = {game.url}
            description={game.description}
            image={game.image}
             /> 
        ))}
       </div>
        </>
    )
}

export default Games 