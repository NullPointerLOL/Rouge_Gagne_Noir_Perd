import React from 'react';
import { useGame } from '../contexts/GameContext';

const ScoreDisplay: React.FC = () => {
  const { state } = useGame();
  
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2">Score</h2>
      <div className="text-4xl font-bold flex items-center">
        <span 
          className={`
            transition-all duration-300 transform 
            ${state.score > 30 ? 'text-green-500 scale-110' : 
              state.score < 20 ? 'text-red-500 animate-pulse' : 'text-gray-700'}
          `}
        >
          {state.score}
        </span>
      </div>
      <div className="mt-2 text-gray-600 text-sm">
        {state.score > 30 ? "Excellent !" : 
         state.score < 20 ? "Attention !" : "Continuez !"}
      </div>
    </div>
  );
};

export default ScoreDisplay;