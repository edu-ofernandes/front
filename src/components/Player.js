import React from 'react';
import { GameContext } from '../context/GameContext';
import './Player.css';

function Player() {
  const { xNext } = React.useContext(GameContext);

  return <h1 className="Player">Player: {xNext ? 'X' : 'O'}</h1>;
}

export default Player;
