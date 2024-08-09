import React, { createContext, useState, useEffect } from 'react';
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";  // Import GameOver component
import { BoardDefault, generateWordSet } from "./Words";

export const AppContext = createContext();

export default function App() {
  const [board, setBoard] = useState(BoardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disable, setDisabled] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false });
  const [correctWord,setCorrectWord]= useState("")

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.wordsAns)
    });
  }, []);

  const onselectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const currBoard = [...board];
    currBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(currBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word not Found");
      return;
    }

    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
    } else if (currAttempt.attempt === 5) { // Check if the user has used all attempts
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  const onBkSpc = () => {
    if (currAttempt.letterPos === 0) return;
    const currBoard = [...board];
    currBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(currBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  return (
    <div className='App'>
      <nav><h1>Wordle</h1></nav>
      <AppContext.Provider value={{
        board, setBoard, currAttempt, setCurrAttempt,
        onselectLetter, onEnter, onBkSpc, correctWord,
        disable, setDisabled, gameOver, setGameOver
      }}>
        <div className="game">
          {gameOver.gameOver ? <GameOver /> : <><Board /><Keyboard /></>}
        </div>
      </AppContext.Provider>
    </div>
  );
}
