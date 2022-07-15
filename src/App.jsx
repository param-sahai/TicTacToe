import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './Winner';
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next is ${isNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isNext ? 'X' : 'O';
        }
        return square;
      });
    });

    setIsNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h3>{message}</h3>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
