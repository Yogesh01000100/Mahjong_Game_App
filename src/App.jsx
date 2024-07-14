import React, { useState } from 'react';
import GameBoard from '../src/component/GameBoard'
import UserNameEntry from '../src/component/UserNameEntry'
import SuccessScreen from '../src/component/SuccessScreen';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [gameFinished, setGameFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);

  return (
    <div className="App">
      {!userName ? (
        <UserNameEntry setUserName={setUserName} />
      ) : gameFinished ? (
        <SuccessScreen score={score} timeTaken={timeTaken} setGameFinished={setGameFinished} />
      ) : (
        <GameBoard setScore={setScore} setGameFinished={setGameFinished} setTimeTaken={setTimeTaken} />
      )}
    </div>
  );
}

export default App;
