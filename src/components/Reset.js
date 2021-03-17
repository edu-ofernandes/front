import React from 'react';
import { GameContext } from '../context/GameContext';
import './Reset.css';
import { FaUndo } from 'react-icons/fa';

function Reset() {
  const { setSquares, setXNext, setWinner, setMovesHistory } = React.useContext(
    GameContext
  );

  function handleClick() {
    setSquares(Array(9).fill(null));
    setXNext(true);
    setWinner('');
    setMovesHistory([]);
  }

  return (
    <button
      className="Reset"
      type="button"
      onClick={handleClick}
      title="recomeçar o jogo"
    >
      <FaUndo />
    </button>
  );
}

export default Reset;
