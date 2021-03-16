import React from 'react';
import './Board.css';
import uuid from 'uuid/dist/v4';
import { GameContext } from '../context/GameContext';
import calculateWinner from '../config/calculateWinner';

import Player from './Player';
import Square from './Square';
import Reset from './Reset';
import Winner from './Winner';

function Board() {
  const { squares, setWinner } = React.useContext(GameContext);

  const winner = calculateWinner(squares);
  React.useEffect(() => {
    if (winner) setWinner(winner);
  }, [squares]);

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
    </div>
  );
}

export default Board;
