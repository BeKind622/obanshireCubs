import React from 'react';
import Game from '../../components/Game';
import gameData from '../../json/games.json';

const Games = () => {
    return (
        <>
        {gameData.map((game, index) => (
            <Game
            key ={index}
            name = {game.name}
            url = {game.url}
            description={game.description}
            image={game.image}
            /> 
        ))}
       
        </>
    )
}

export default Games 