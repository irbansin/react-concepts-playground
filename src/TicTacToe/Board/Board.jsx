import { useContext, useState } from "react";
import styles from "./Board.module.css";
import { GameContext } from "../TicTacToe";

function Board({ boardState, handleBoardChange }) {
  const [currentSign, setCurrentSign] = useState("x");
  const { gameState } = useContext(GameContext);

  let counter = 0;

  function handleClick(i, j) {
    let newBoardState = [...boardState];

    if (gameState.isActive && newBoardState[i][j] == "") {
      newBoardState[i][j] = currentSign;
      handleBoardChange(newBoardState);
      currentSign == "x" ? setCurrentSign("o") : setCurrentSign("x");
    }
  }

  return (
    <div className={styles.container}>
      {boardState.map((item, i) => {
        return item.map((subItem, j) => {
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
