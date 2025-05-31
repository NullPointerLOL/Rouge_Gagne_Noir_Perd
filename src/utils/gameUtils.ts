import { CardType } from '../types';

// Create initial cards
export const createInitialCards = (): CardType[] => {
  // We'll create two clubs (black) and one diamond (red)
  return [
    { id: 1, suit: 'club', isRevealed: false },
    { id: 2, suit: 'club', isRevealed: false },
    { id: 3, suit: 'diamond', isRevealed: false },
  ];
};

// Shuffle the cards
export const shuffleCards = (cards: CardType[]): CardType[] => {
  const shuffledCards = [...cards].map(card => ({ ...card, isRevealed: false }));
  
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }
  
  return shuffledCards;
};

// Get score change based on the selected card
export const getScoreChange = (card: CardType): number => {
  return card.suit === 'diamond' ? 10 : -10;
};