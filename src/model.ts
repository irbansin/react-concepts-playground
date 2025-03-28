export interface GameContextType {
  gameState: {
    isActive: boolean;
    winner: string;
    currentBoardStatus: string[][];
  };
  setGameState: React.Dispatch<
    React.SetStateAction<{
      isActive: boolean;
      winner: string;
      currentBoardStatus: string[][];
    }>
  >;
}
