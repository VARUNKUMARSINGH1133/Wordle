import React from 'react';
import { useContext,useEffect } from 'react';
import {AppContext} from '../App'
export default function Letter({ letterPos, attemptVal }) {
  const {board,correctWord,currAttempt,disable,setDisabled}= useContext(AppContext)
  const letter= board[attemptVal][letterPos]

  const correct=correctWord.toUpperCase()[letterPos]===letter
  const almost=!correct &&letter!=="" && correctWord.includes(letter)
  const letterState= currAttempt.attempt >attemptVal && 
  (correct?"correct":almost?"almost":"error")

  useEffect(()=>{
    if(letter!==""&& !correct && !almost){
      setDisabled((prev)=>[...prev,letter]);
    }
  })

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}
