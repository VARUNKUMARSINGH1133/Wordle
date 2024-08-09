import React, { useState } from "react";
import Letter from "./Letter";
import {BoardDefault} from "../Words"

function Board() {
  const [board, setBoard] = useState(BoardDefault);

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((_, letterIndex) => (
            <Letter key={letterIndex} letterPos={letterIndex} attemptVal={rowIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;