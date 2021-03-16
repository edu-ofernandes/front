import React from 'react';
import { GameContext } from '../context/GameContext';
import './Reset.css';
import { FaUndo } from 'react-icons/fa';

function Reset() {
  const { setSquares, setXNext, setWinner } = React.useContext(GameContext);

  function handleClick() {
    setSquares(Array(9).fill(null));
    setXNext(true);
    setWinner('');
  }
  return (
    <button className="Reset" type="button" onClick={handleClick}>
      <FaUndo />
    </button>
  );
}

export default Reset;
