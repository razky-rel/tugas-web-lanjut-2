import React from 'react'; 
import GameList from './components/GameList'; 
import './App.css';

function App() { 
  return ( 
    <div className="app"> 
      <h1 className="app-title">Daftar Game</h1> 
      <GameList /> 
    </div> 
  ); 
} 
export default App; 