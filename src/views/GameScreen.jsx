import React, { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { CHARACTERS } from '../data/characters';
import DialogueBox from '../components/DialogueBox';
import ChoiceOverlay from '../components/ChoiceOverlay';
import AffectionMeter from '../components/AffectionMeter';

const GameScreen = () => {
    const { currentScene, nextScene, makeChoice, gameState, saveGame, resetGame, loadGame } = useGame();

    if (!currentScene) {
        return <div>Loading or Error...</div>;
    }

    const character = currentScene.character ? CHARACTERS[currentScene.character] : null;
    const bgImage = currentScene.background || '#333'; // Fallback color

    // Handle scene transition details
    const handleDialogueClick = () => {
        if (!currentScene.choices) {
            nextScene();
        }
    };

    // Memoize the character image selection to keep it stable per scene
    const characterImage = React.useMemo(() => {
        if (!character) return null;
        let src = character.images[currentScene.expression] || character.images.default;

        // Handle random variations if src is an array
        if (Array.isArray(src)) {
            // Use a pseudo-random generator based on scene ID + character ID to be deterministic per scene visit?
            // Or just Math.random() so it stays same *during* the scene but changes on revisit?
            // Math.random() inside useMemo will stick until currentScene.id changes.
            const index = Math.floor(Math.random() * src.length);
            src = src[index];
        }
        return src;
    }, [currentScene?.id, character, currentScene?.expression]);

    return (
        <div className="game-screen" style={{ backgroundImage: `url(${bgImage})` }}>
            {/* System Menu */}
            <div className="system-menu">
                <button onClick={saveGame}>Save</button>
                <button onClick={loadGame}>Load</button>
                <button onClick={resetGame}>Reset</button>
            </div>

            {/* Affection Meter */}
            <AffectionMeter />

            {/* Character Display */}
            {character && characterImage && (
                <div className="character-stage">
                    <img
                        src={characterImage}
                        alt={character.name}
                        className={`character-sprite ${currentScene.expression || ''}`}
                    />
                </div>
            )}

            {/* Choices overlay (if active) */}
            {currentScene.choices && (
                <ChoiceOverlay choices={currentScene.choices} onChoice={makeChoice} />
            )}

            {/* Dialogue Box */}
            <DialogueBox
                name={character ? character.name : ''}
                text={currentScene.text}
                onClick={handleDialogueClick}
            />
        </div>
    );
};

export default GameScreen;
