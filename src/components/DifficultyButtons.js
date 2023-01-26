import React from "react";
export function DifficultyButtons({setDifficulty, setGameState}) {
  return (
  <div className="flex justify-center gap-3 mt-6 flex-col">
      <button className="bg-blue-300 px-4 py-2 drop-shadow-lg rounded-md hover:bg-blue-400 active:bg-blue-500" onClick={() => {setDifficulty("human"); setGameState("side")}}>1 vs 1</button>
      <button className="bg-blue-300 px-4 py-2 drop-shadow-lg rounded-md hover:bg-blue-400 active:bg-blue-500" onClick={() => {setDifficulty("random"); setGameState("side")}}>1 vs AI</button>
      <button className="bg-red-600 px-4 py-2 drop-shadow-lg text-white rounded-md hover:bg-red-700 active:bg-red-800" onClick={() => {setDifficulty("minimax"); setGameState("side")}}>DEFEAT ME</button>
  </div>
)}
  