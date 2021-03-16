import React from 'react';
import { GameContext } from '../context/GameContext';
import './Winner.css';

function Winner() {
  const { winner } = React.useContext(GameContext);

  if (!winner) return <></>;

  return <p className="Winner">{winner} Ganhou!</p>;
}

export default Winner;
