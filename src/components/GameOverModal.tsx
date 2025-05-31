import React from 'react';
import { useGame } from '../contexts/GameContext';

const GameOverModal: React.FC = () => {
  const { state, resetGame } = useGame();

  if (!state.isGameOver) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-500 animate-modal-in">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-4">Partie Terminée !</h2>
        
        <div className="text-center mb-6">
          <p className="text-xl mb-4">La chance vous a quitté.</p>
          <p className="text-gray-600">Vous avez trouvé la carte rouge {state.wins} fois !</p>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg 
                      font-bold transform hover:scale-105 transition-all shadow-lg"
          >
            Rejouer
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal;