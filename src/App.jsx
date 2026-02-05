import React from 'react';
import { GameProvider } from './context/GameContext';
import GameScreen from './views/GameScreen';
import './index.css';

function App() {
  return (
    <GameProvider>
      <div className="app-container">
        <GameScreen />
      </div>
    </GameProvider>
  );
}

export default App;
