import React from 'react';
import { GameContext } from '../context/GameContext';
import './Square.css';

function Square({ value, index }) {
  const {
    squares,
    setSquares,
    xNext,
    setXNext,
    winner,
    movesHistory,
    setMovesHistory,
  } = React.useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if (winner) return;

    const newSquare = [...squares];
    newSquare[index] = xNext ? 'X' : 'O';
    setSquares(newSquare);
    setXNext(!xNext);

    setMovesHistory([
      ...movesHistory,
      {
        squares: [...squares],
        xNext: !xNext,
        winner,
      },
    ]);
  }
  return (
    <button
      className="Square"
      type="button"
      onClick={handleClick}
      title={value}
    >
      {value}
    </button>
  );
}

export default Square;
