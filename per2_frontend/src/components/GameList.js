import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
 
const GameList = () => { 
  const [games, setGames] = useState([]); 
 
  useEffect(() => { 
    axios.get('http://localhost:3000/api/games')
      .then(response => { 
        console.log('Data dari API:', response.data); 
        setGames(response.data); 
      }) 
      .catch(error => console.error('Error fetching data:', 
error)); 
  }, []); 
 
  return ( 
    <div className="game-container"> 
      <h2 className="game-title">Game Populer</h2> 
      <ul className="game-list"> 
        {games.length > 0 ? ( 
          games.map(game => ( 
            <li className="game-item" key={game.id}>
              <span className="game-name">{game.nama}</span> 
              <span className="game-genre">{game.genre}</span>
            </li> 
          )) 
        ) : ( 
          <p>Data tidak tersedia</p> 
        )} 
      </ul> 
    </div> 
  ); 
}; 
export default GameList;