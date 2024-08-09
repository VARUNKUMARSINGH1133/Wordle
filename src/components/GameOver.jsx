import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function GameOver() {
    const { gameOver, correctWord, currAttempt } = useContext(AppContext);
    
    return (
        <div className="GameOver">
            <h3>{gameOver.guessedWord ? "You guessed it correctly" : "You Lost"}</h3>
            <h1>Correct Word: {correctWord}</h1>
            {gameOver.guessedWord && (<h3>You guessed it in {currAttempt.attempt} attempts</h3>)}
        </div>
    );
}
