import React, { createContext, useContext, useState, useEffect } from 'react';
import { SCENARIOS } from '../data/scenarios';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

const INITIAL_STATE = {
    currentSceneId: 'opening',
    history: [],
    affection: {
        friend1: 0,
        friend2: 0,
        friend3: 0
    },
    flags: {}
};

export const GameProvider = ({ children }) => {
    const [gameState, setGameState] = useState(INITIAL_STATE);

    // Load game from local storage on mount (optional or triggered manually)
    const loadGame = () => {
        const saved = localStorage.getItem('datingSimSave');
        if (saved) {
            setGameState(JSON.parse(saved));
            return true;
        }
        return false;
    };

    const saveGame = () => {
        localStorage.setItem('datingSimSave', JSON.stringify(gameState));
        alert('Game Saved!');
    };

    const resetGame = () => {
        setGameState(INITIAL_STATE);
    };

    const currentScene = SCENARIOS[gameState.currentSceneId];

    const makeChoice = (choice) => {
        // Update affection
        if (choice.affection) {
            setGameState(prev => {
                const newAffection = { ...prev.affection };
                Object.keys(choice.affection).forEach(charId => {
                    newAffection[charId] = (newAffection[charId] || 0) + choice.affection[charId];
                });
                return {
                    ...prev,
                    currentSceneId: choice.next,
                    affection: newAffection,
                    history: [...prev.history, prev.currentSceneId] // Track history
                };
            });
        } else {
            // Just move to next scene
            setGameState(prev => ({
                ...prev,
                currentSceneId: choice.next,
                history: [...prev.history, prev.currentSceneId]
            }));
        }
    };

    const nextScene = () => {
        // Handle Ending Calculation based on specific choice
        if (currentScene.next === 'CALCULATE_SPECIFIC_ENDING') {
            const targetChar = currentScene.target;
            const score = gameState.affection[targetChar] || 0;
            const threshold = 15; // Success threshold

            if (score >= threshold) {
                setGameState(prev => ({
                    ...prev,
                    currentSceneId: `ending_success_${targetChar}`,
                    history: [...prev.history, `ending_success_${targetChar}`]
                }));
            } else {
                setGameState(prev => ({
                    ...prev,
                    currentSceneId: `ending_fail_${targetChar}`,
                    history: [...prev.history, `ending_fail_${targetChar}`]
                }));
            }
        }
        // Handle Mid-Game Conditional Branch
        else if (currentScene.next === 'CALCULATE_BRANCH') {
            const affections = gameState.affection;
            let maxAffection = -1; // Allow 0 to work if needed, or stick to >0
            let bestChar = 'friend1'; // Default fallback

            Object.keys(affections).forEach(charId => {
                if (affections[charId] > maxAffection) {
                    maxAffection = affections[charId];
                    bestChar = charId;
                }
            });

            // If nobody has points (start of game?), default to friend1.
            // Jump to the branch defined in the scene
            const nextId = currentScene.branches ? currentScene.branches[bestChar] : 'opening';

            setGameState(prev => ({
                ...prev,
                currentSceneId: nextId,
                history: [...prev.history, nextId]
            }));
        }
        // Standard Transition
        else if (currentScene.next) {
            setGameState(prev => ({
                ...prev,
                currentSceneId: currentScene.next,
                history: [...prev.history, prev.currentSceneId]
            }));
        }
    };

    return (
        <GameContext.Provider value={{
            gameState,
            currentScene,
            makeChoice,
            nextScene,
            saveGame,
            loadGame,
            resetGame
        }}>
            {children}
        </GameContext.Provider>
    );
};
