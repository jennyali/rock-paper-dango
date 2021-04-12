import React from 'react';
import './WinScreen.css';

const WinScreen = ({ winText, resultText, winImage, endRound }) => {

    return (
        <div className="winscreen-container">
            <img 
                className="winscreen-img"
                src={winImage}
                alt={winText}
            />
            <h1>{resultText}</h1>
            <p>{winText}</p>
            <button
                className="winscreen-btn"
                onClick={() => endRound(false)}
            >
            Again?
            </button>
        </div>
    );
};

export default WinScreen;