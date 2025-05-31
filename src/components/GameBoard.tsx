import React, { useState, useEffect } from 'react';
import Card from './Card';
import { useGame } from '../contexts/GameContext';

const positions = ['left', 'center', 'right'] as const;

const GameBoard: React.FC = () => {
  const { state, selectCard } = useGame();
  const [isShuffling, setIsShuffling] = useState(false);
  
  useEffect(() => {
    if (state.isAnimating) {
      // Start shuffling animation after cards are hidden
      setTimeout(() => {
        setIsShuffling(true);
        setTimeout(() => {
          setIsShuffling(false);
        }, 2500);
      }, 1700); // Start shortly after cards are hidden
    }
  }, [state.isAnimating]);
  
  return (
    <div className="w-full flex flex-col items-center mt-8">
      <div className="flex flex-row gap-4 md:gap-8 justify-center flex-wrap">
        {state.cards.map((card, index) => (
          <Card 
            key={card.id} 
            card={card}
            onClick={() => selectCard(card.id)}
            disabled={state.isAnimating || state.isGameOver}
            position={positions[index]}
            isShuffling={isShuffling}
          />
        ))}
      </div>
      
      <div className="mt-8 text-center text-gray-600">
        {!state.isGameOver && !state.isAnimating && (
          <p className="text-lg">Sélectionnez une carte pour tenter votre chance !</p>
        )}
        {state.isAnimating && !state.isGameOver && (
          <p className="text-lg animate-pulse">Mélange des cartes...</p>
        )}
      </div>
    </div>
  );
};

export default GameBoard;