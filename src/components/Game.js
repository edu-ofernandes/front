import React from 'react';
import Board from './Board';
import './Game.css';

import { GameContextProvider } from '../context/GameContext';

function Game() {
  return (
    <GameContextProvider>
      <div className="Game">
        <Board></Board>
      </div>
    </GameContextProvider>
  );
}

export default Game;
