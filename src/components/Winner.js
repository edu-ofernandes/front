import React from 'react';
import { GameContext } from '../context/GameContext';
import './Winner.css';

function Winner() {
  const { winner, movesHistory } = React.useContext(GameContext);

  if (!winner) return <></>;

  console.log(movesHistory);
  return <p className="Winner">{winner} Ganhou!</p>;
}

export default Winner;
