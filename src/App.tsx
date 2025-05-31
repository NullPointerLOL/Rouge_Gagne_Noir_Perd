import React from 'react';
import { GameProvider } from './contexts/GameContext';
import GameBoard from './components/GameBoard';
import ScoreDisplay from './components/ScoreDisplay';
import GameOverModal from './components/GameOverModal';
import Instructions from './components/Instructions';

function App() {
  return (
    <GameProvider>
      <div className="min-h-screen p-4 md:p-8">
        <Instructions />
        
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-2">
            Rouge Gagne Noir Perd
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Tentez votre chance ! Trouvez la carte rouge pour gagner des points.
          </p>
          
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-6 md:p-8">
            <ScoreDisplay />
            <GameBoard />
          </div>
          
          <footer className="mt-12 text-center text-gray-500 text-sm">
            Rouge Gagne Noir Perd © 2025 - Mgr Cyrille. Tous droits Réservés
          </footer>
        </div>
        
        <GameOverModal />
      </div>
    </GameProvider>
  );
}

export default App;