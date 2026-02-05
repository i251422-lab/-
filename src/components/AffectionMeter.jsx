import React from 'react';
import { useGame } from '../context/GameContext';
import { CHARACTERS } from '../data/characters';

const AffectionMeter = () => {
    const { gameState } = useGame();

    if (!gameState || !gameState.affection) return null;

    return (
        <div className="affection-meter">
            {Object.entries(gameState.affection).map(([charId, score]) => {
                const charName = CHARACTERS[charId]?.name || charId;
                // Limit score visually to 100% (assuming max affection ~20-30 for this short game, but let's scale it slightly)
                // Let's say 10 affection = 100% width for prototype scale, or just show number.
                // Let's do a simple bar.
                const percentage = Math.min(100, Math.max(0, score * 10));

                return (
                    <div key={charId} className="affection-item">
                        <span className="char-label">{charName}</span>
                        <div className="progress-bar-bg">
                            <div
                                className="progress-bar-fill"
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                        <span className="score-label">{score}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default AffectionMeter;
