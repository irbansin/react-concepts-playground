import { createContext, useState } from "react";
import Board from "./Board/Board";
import analyseGame from "./utils/gameAnalyser";

export const GameContext = createContext(null);

const status = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function TicTacToe() {
  const [currentBoardStatus, setCurrentBoardStatus] = useState(status);
  const [gameStatus, setGameStatus] = useState("Start Game");

  const [gameState, setGameState] = useState({
    isActive: true,
  });

  function boardChangeHandler(boardState: any) {
    setCurrentBoardStatus(boardState);
    let gameWinner = analyseGame(boardState);
    setGameStatus(gameWinner);
    if (gameWinner) setGameState({ isActive: false });
  }

  function resetGame() {
    console.log(status);
    setCurrentBoardStatus([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  }

  return (
    <>
      <GameContext.Provider value={{ gameState, setGameState }}>
        <h3>Tic Tac Toe Example</h3>
        <button onClick={resetGame}>Reset</button>
        <Board
          boardState={currentBoardStatus}
          handleBoardChange={boardChangeHandler}
        />
        <h2>{gameStatus ? `Winner is ${gameStatus}` : ""}</h2>
      </GameContext.Provider>
    </>
  );
}
export default TicTacToe;
