import React from 'react';
import './Board.css';
import uuid from 'uuid/dist/v4';
import { GameContext } from '../context/GameContext';
import calculateWinner from '../config/calculateWinner';

import Player from './Player';
import Square from './Square';
import Reset from './Reset';
import Winner from './Winner';
import MovesHistory from './MovesHistory';

function Board() {
  const { squares, setWinner, movesHistory } = React.useContext(GameContext);

  const winner = calculateWinner(squares);
  React.useEffect(() => {
    if (winner) setWinner(winner);
  }, [movesHistory, squares, setWinner]);

  return (
    <div className="Content">
      <div className="info">
        {!winner ? <Player /> : <></>}
        <Winner />
        <Reset />
      </div>
      <div className="Board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={uuid()} />
        ))}
      </div>
      <p>Ir para jogada:</p>
      <MovesHistory />
    </div>
  );
}

export default Board;
