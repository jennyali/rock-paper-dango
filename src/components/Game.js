import React, { useState } from 'react';
import Data from '../Data';
import ChoiceBtn from './ChoiceBtn';
import './Game.css';
import _ from 'lodash';
import outcome from '../helpers/outcome';
import cpuChoice from '../helpers/cpuChoice';
import WinScreen from './WinScreen';


const Game = () => {
    const [winningImage, setWinningImage] = useState('');
    const [winningText, setWinningText] = useState('');
    const [theResult, setTheResult] = useState('');
    const [endOfRound, setEndOfRound] = useState(false);

    const pickedOption = (option) => {
        const userOption = _.find( Data, [ 'id', option ]);
        const userPick = userOption.name;
        const cpuPick = cpuChoice();

        outcome(userOption, userPick, cpuPick,setWinningImage, setWinningText, setEndOfRound, setTheResult);
    }

    return (
            <div className="game-container">
                { endOfRound ? (
                    <WinScreen 
                        winText={winningText}
                        resultText={theResult}
                        winImage={winningImage}
                        endRound={setEndOfRound}
                    />
                ) : (
                    <div>
                    <h2>Choose:</h2>
                    <div className="options-row">
                        <ChoiceBtn 
                            option={Data.rock} 
                            onPick={pickedOption}
                        />
                        <ChoiceBtn 
                            option={Data.paper} 
                            onPick={pickedOption}
                        />
                        <ChoiceBtn 
                            option={Data.dango}
                            onPick={pickedOption} 
                        />
                    </div>
                </div>
                )}
            </div>
    )
};

export default Game;