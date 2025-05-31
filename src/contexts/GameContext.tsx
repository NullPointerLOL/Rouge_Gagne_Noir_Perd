import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CardType, GameState } from '../types';
import { createInitialCards, shuffleCards, getScoreChange } from '../utils/gameUtils';
import { playSound, vibrate } from '../utils/soundEffects';

type GameAction = 
  | { type: 'SELECT_CARD'; cardId: number }
  | { type: 'HIDE_CARDS' }
  | { type: 'SHUFFLE_CARDS' }
  | { type: 'RESET_GAME' };

const initialState: GameState = {
  cards: createInitialCards(),
  score: 30,
  wins: 0,
  isGameOver: false,
  isAnimating: false,
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'SELECT_CARD': {
      if (state.isAnimating || state.isGameOver) return state;

      const updatedCards = state.cards.map(card => 
        card.id === action.cardId 
          ? { ...card, isRevealed: true } 
          : card
      );

      const selectedCard = updatedCards.find(card => card.id === action.cardId);
      if (!selectedCard) return state;

      const scoreChange = getScoreChange(selectedCard);
      const newScore = state.score + scoreChange;
      const newWins = selectedCard.suit === 'diamond' ? state.wins + 1 : state.wins;
      const isGameOver = newScore <= 0;

      // Play sound and vibrate based on result
      if (selectedCard.suit === 'diamond') {
        playSound('win');
        vibrate([100]);
      } else {
        playSound('lose');
        vibrate([50, 50, 50]);
      }

      return {
        ...state,
        cards: updatedCards,
        score: newScore,
        wins: newWins,
        isGameOver,
        isAnimating: true,
      };
    }
    
    case 'HIDE_CARDS':
      return {
        ...state,
        cards: state.cards.map(card => ({ ...card, isRevealed: false })),
      };

    case 'SHUFFLE_CARDS': {
      playSound('shuffle');
      vibrate(50);
      return {
        ...state,
        cards: shuffleCards(state.cards),
        isAnimating: false,
      };
    }
      
    case 'RESET_GAME':
      return {
        ...initialState,
        cards: shuffleCards(createInitialCards()),
      };
      
    default:
      return state;
  }
};

type GameContextType = {
  state: GameState;
  selectCard: (cardId: number) => void;
  resetGame: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const selectCard = (cardId: number) => {
    dispatch({ type: 'SELECT_CARD', cardId });
    
    // Hide cards after 1.5 seconds
    setTimeout(() => {
      dispatch({ type: 'HIDE_CARDS' });
    }, 1500);

    // Start shuffling animation after hiding cards
    setTimeout(() => {
      dispatch({ type: 'SHUFFLE_CARDS' });
    }, 2500);
  };

  const resetGame = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  return (
    <GameContext.Provider value={{ state, selectCard, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};