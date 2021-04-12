import React from 'react';
import './ChoiceBtn.css';

const ChoiceBtn = ({ option, onPick }) => {
    return (
        <div 
            className="ChoiceBtn"
            id={option.id}
            onClick={() => onPick(option.id)}
        >
            <img 
                className="ChoiceBtn-img"
                src={option.image} 
                alt={option.name} 
            />
            <p className="ChoiceBtn-text">
                {option.name}
            </p>
        </div>
    )
}

export default ChoiceBtn;