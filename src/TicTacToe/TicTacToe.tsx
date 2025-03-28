import { useState } from 'react';
import Board from './Board/Board';
import analyseGame from './utils/gameAnalyser';

const status = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

function TicTacToe() {
  const [currentBoardStatus, setCurrentBoardStatus] = useState(status);
  const [gameStatus, setGameStatus] = useState('Start Game')

  function boardChangeHandler(boardState: any) {
    setCurrentBoardStatus(boardState);
    setGameStatus(analyseGame(boardState))
  }

  function resetGame() {
    console.log(status)
    setCurrentBoardStatus(status)
  }

  return (
    <>
      <h3>Tic Tac Toe Example</h3>
      <button onClick={resetGame}>Reset</button>
      <Board
        boardState={currentBoardStatus}
        handleBoardChange={boardChangeHandler}
      />
      <h2>{gameStatus}</h2>
    </>
  );
}
export default TicTacToe;
