function analyseGame(boardState: Array<Array<string>>): string {
  if (
    boardState[0][0] == boardState[0][1] &&
    boardState[0][1] == boardState[0][2]
  )
    return boardState[0][0];
  if (
    boardState[1][0] == boardState[1][1] &&
    boardState[1][1] == boardState[1][2]
  )
    return boardState[1][0];
  if (
    boardState[2][0] == boardState[2][1] &&
    boardState[2][1] == boardState[2][2]
  )
    return boardState[2][0];

  if (
    boardState[0][0] == boardState[1][0] &&
    boardState[1][0] == boardState[2][0]
  )
    return boardState[0][0];
  if (
    boardState[0][1] == boardState[1][1] &&
    boardState[1][1] == boardState[2][1]
  )
    return boardState[0][1];
  if (
    boardState[0][2] == boardState[1][2] &&
    boardState[1][2] == boardState[2][2]
  )
    return boardState[0][2];

  if (
    boardState[0][0] == boardState[1][1] &&
    boardState[1][1] == boardState[2][2]
  )
    return boardState[0][0];
  if (
    boardState[0][2] == boardState[1][1] &&
    boardState[1][1] == boardState[2][0]
  )
    return boardState[0][2];

  return "";
}

export default analyseGame;
