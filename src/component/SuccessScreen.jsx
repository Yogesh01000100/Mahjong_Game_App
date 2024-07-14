import React from 'react';
import './GameBoard.css';

function SuccessScreen({ score, timeTaken }) {
  return (
    <div className="success-screen">
      <h1>React Tiles</h1>
      <h2>Game Finished!</h2>
      <p>Score: {score}</p>
      <p>Time Taken: {timeTaken}</p>
    </div>
  );
}

export default SuccessScreen;
