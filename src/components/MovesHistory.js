import React from 'react';
import { GameContext } from '../context/GameContext';
import uuid from 'uuid/dist/v4';
import './MovesHistory.css';

function MovesHistory() {
  const {
    movesHistory,
    setMovesHistory,
    setSquares,
    setXNext,
    setWinner,
  } = React.useContext(GameContext);

  function handleClick(index) {
    const newMovesHistory = [...movesHistory];
    newMovesHistory.splice(index, Number.MAX_SAFE_INTEGER);
    setMovesHistory(newMovesHistory);

    setSquares(movesHistory[index].squares);
    setXNext(movesHistory[index].xNext);
    setWinner(movesHistory[index].winner);
  }

  return (
    <div className="contentMovesHistory">
      {movesHistory.map((data, index) => (
        <button
          key={uuid()}
          className="MovesHistory"
          type="button"
          onClick={() => handleClick(index)}
        >
          {index}
        </button>
      ))}
    </div>
  );
}

export default MovesHistory;
