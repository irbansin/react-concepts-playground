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
  const [gameState, setGameState] = useState({
    isActive: true,
    winner: "",
    currentBoardStatus: status,
  });

  function boardChangeHandler(boardState: any) {
    gameState.currentBoardStatus = boardState;
    let gameWinner = analyseGame(boardState);
    if (gameWinner)
      setGameState({ ...gameState, isActive: false, winner: gameWinner });
  }

  function resetGame() {
    console.log(status);
    let initialStatus = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    setGameState({
      ...gameState,
      isActive: true,
      winner: "",
      currentBoardStatus: initialStatus,
    });
  }

  return (
    <>
      <GameContext.Provider value={{ gameState, setGameState }}>
        <h3>Tic Tac Toe Example</h3>
        <button onClick={resetGame}>Reset</button>
        <Board
          boardState={gameState.currentBoardStatus}
          handleBoardChange={boardChangeHandler}
        />
        <h2>
          {gameState.winner.length ? `Winner is ${gameState.winner}` : ""}
        </h2>
      </GameContext.Provider>
    </>
  );
}
export default TicTacToe;
