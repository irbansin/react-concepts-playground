import { useState } from 'react';
import Board from './Board/Board';

const status = [
  ['', '', ''],
  ['', 'x', ''],
  ['', '', ''],
];

function TicTacToe() {
  const [currentBoardStatus, setCurrentBoardStatus] = useState(status);

  function boardChangeHandler(boardState: any) {
    setCurrentBoardStatus(boardState);
  }

  return (
    <>
      <h3>Tic Tac Toe Example</h3>
      <Board
        boardState={currentBoardStatus}
        handleBoardChange={boardChangeHandler}
      />
    </>
  );
}
export default TicTacToe;
