import React, { useState } from 'react';
import { HelpCircle, Diamond, Club, X } from 'lucide-react';

const Instructions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label="Instructions"
      >
        <HelpCircle size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button 
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Comment Jouer</h2>
            
            <div className="space-y-4 mb-6">
              <p>Il y a trois cartes : deux noires et une rouge.</p>
              
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Diamond className="text-red-500" size={20} /> 
                  <span>Carte rouge : <span className="font-bold text-green-600">+10 points</span></span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Club className="text-gray-900" size={20} /> 
                  <span>Carte noire : <span className="font-bold text-red-600">-10 points</span></span>
                </div>
              </div>
              
              <p>Les cartes sont mélangées après chaque tour.</p>
              <p>La partie se termine quand votre score atteint 0.</p>
              <p>Essayez de garder votre score le plus élevé possible !</p>
            </div>

            <button 
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Compris !
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Instructions;