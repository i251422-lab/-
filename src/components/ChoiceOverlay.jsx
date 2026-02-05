import React from 'react';

const ChoiceOverlay = ({ choices, onChoice }) => {
    if (!choices || choices.length === 0) return null;

    return (
        <div className="choice-overlay">
            <div className="choice-container">
                {choices.map((choice, index) => (
                    <button
                        key={index}
                        className="choice-button"
                        onClick={() => onChoice(choice)}
                    >
                        {choice.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChoiceOverlay;
