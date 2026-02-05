import React from 'react';

const DialogueBox = ({ name, text, onClick }) => {
    return (
        <div className="dialogue-box" onClick={onClick}>
            {name && <div className="character-name">{name}</div>}
            <div className="dialogue-text">{text}</div>
            <div className="next-indicator">▼</div>
        </div>
    );
};

export default DialogueBox;
