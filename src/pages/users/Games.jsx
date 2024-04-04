import React from 'react';
import Game from '../../components/Game';
import gameData from '../../json/games.json';

const Games = () => {
    return (
        <>
        <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-0">
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