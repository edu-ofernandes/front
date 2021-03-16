import React from 'react';
import { GameContext } from '../context/GameContext';
import './Square.css';

function Square({ value, index }) {
  const { squares, setSquares, xNext, setXNext, winner } = React.useContext(
    GameContext
  );

  function handleClick() {
    if (squares[index]) return;
    if (winner) return;

    const newSquare = [...squares];
    newSquare[index] = xNext ? 'X' : 'O';
    setSquares(newSquare);
    setXNext(!xNext);
  }
  return (
    <button className="Square" type="button" onClick={handleClick}>
      {value}
    </button>
  );
}

export default Square;
