import { useContext, useState } from "react";
import styles from "./Board.module.css";
import { GameContext } from "../TicTacToe";

function Board({ boardState, handleBoardChange }: any) {
  const [currentSign, setCurrentSign] = useState("x");
  const gameContext = useContext(GameContext);

  const { gameState } = gameContext || {};

  let counter = 0;

  function handleClick(i: any, j: any) {
    let newBoardState = [...boardState];

    if (gameState?.isActive && newBoardState[i][j] == "") {
      newBoardState[i][j] = currentSign;
      handleBoardChange(newBoardState);
      currentSign == "x" ? setCurrentSign("o") : setCurrentSign("x");
    }
  }

  return (
    <div className={styles.container}>
      {boardState.map((item: any[], i: any) => {
        return item.map((subItem: string, j: any) => {
          return (
            <div
              key={counter++}
              className={styles.square}
              onClick={() => handleClick(i, j)}
            >
              {subItem}
            </div>
          );
        });
      })}
    </div>
  );
}
export default Board;
