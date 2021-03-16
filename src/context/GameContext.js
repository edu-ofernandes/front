import React from 'react';

const GameContext = React.createContext();

function GameContextProvider({ children }) {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xNext, setXNext] = React.useState(true);
  const [winner, setWinner] = React.useState('');

  const states = {
    squares,
    setSquares,
    xNext,
    setXNext,
    winner,
    setWinner,
  };
  return <GameContext.Provider value={states}>{children}</GameContext.Provider>;
}

export { GameContextProvider, GameContext };
