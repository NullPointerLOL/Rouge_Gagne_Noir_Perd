import React from 'react';
import { CardType } from '../types';
import { ClubIcon, DiamondIcon } from './CardIcons';

interface CardProps {
  card: CardType;
  onClick: () => void;
  disabled: boolean;
  position: 'left' | 'center' | 'right';
  isShuffling: boolean;
}

const Card: React.FC<CardProps> = ({ card, onClick, disabled, position, isShuffling }) => {
  const isClub = card.suit === 'club';
  
  return (
    <div 
      className={`
        relative w-32 h-48 md:w-40 md:h-60 bg-white rounded-xl shadow-lg 
        transition-all duration-300 ease-in-out 
        transform ${card.isRevealed ? 'rotate-y-180' : 'hover:translate-y-[-5px]'}
        ${disabled ? 'cursor-default opacity-80' : 'cursor-pointer hover:shadow-xl'}
        ${isShuffling ? `animate-swap-${position}` : ''}
      `}
      onClick={disabled ? undefined : onClick}
    >
      {/* Card Back */}
      <div 
        className={`
          absolute inset-0 flex items-center justify-center rounded-xl
          bg-gradient-to-br from-indigo-500 to-purple-600
          border-2 border-white
          transition-opacity duration-300
          ${card.isRevealed ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <div className="text-white text-3xl font-bold">?</div>
      </div>

      {/* Card Front */}
      <div 
        className={`
          absolute inset-0 flex flex-col items-center justify-center rounded-xl
          bg-white border-2 ${isClub ? 'border-gray-800' : 'border-red-500'}
          transition-opacity duration-300
          ${card.isRevealed ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div className="absolute top-2 left-2 text-xl">
          {isClub ? '♣' : '♦'}
        </div>
        
        <div className="flex items-center justify-center h-24 w-24">
          {isClub ? (
            <ClubIcon className={`h-20 w-20 text-gray-900`} />
          ) : (
            <DiamondIcon className={`h-20 w-20 text-red-500`} />
          )}
        </div>
        
        <div className="absolute bottom-2 right-2 text-xl transform rotate-180">
          {isClub ? '♣' : '♦'}
        </div>
      </div>
    </div>
  );
};

export default Card;