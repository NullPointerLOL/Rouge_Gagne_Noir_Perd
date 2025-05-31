export type CardType = {
  id: number;
  suit: 'club' | 'diamond';
  isRevealed: boolean;
};

export type GameState = {
  cards: CardType[];
  score: number;
  wins: number;
  isGameOver: boolean;
  isAnimating: boolean;
};