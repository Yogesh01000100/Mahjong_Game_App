import React, { useState, useEffect } from "react";
import "./GameBoard.css";

const tileImages = ["🌼", "🌸", "🌺", "🌹", "🌼", "🌸", "🌺", "🌹"];

function GameBoard({ setGameFinished, setScore, setTimeTaken }) {
  const [tiles, setTiles] = useState([]);
  const [openTiles, setOpenTiles] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    setTiles(shuffleTiles(tileImages.concat(tileImages)));
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    if (matchedIndices.length === tiles.length && matchedIndices.length !== 0) {
      const endTime = Date.now();
      setTimeTaken((endTime - startTime) / 1000);
      setGameFinished(true);
    }
  }, [matchedIndices, tiles.length, setGameFinished, setTimeTaken, startTime]);

  const shuffleTiles = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleTileClick = (index) => {
    if (!matchedIndices.includes(index) && openTiles.length < 2) {
      const newOpenTiles = [...openTiles, index];
      setOpenTiles(newOpenTiles);
      if (newOpenTiles.length === 2) {
        const isMatch = tiles[newOpenTiles[0]] === tiles[newOpenTiles[1]];
        setTimeout(() => {
          setOpenTiles([]);
          if (isMatch) {
            setMatchedIndices((prev) => [
              ...prev,
              newOpenTiles[0],
              newOpenTiles[1],
            ]);
            setScore((prev) => prev + 1);
          } else {
            setScore((prev) => prev - 1);
          }
        }, 1000);
      }
    }
  };

  return (
    <div className="flex">
      <div>Mahjong</div>
      <div className="game-board">
        {tiles.map((tile, index) => (
          <button
            key={index}
            className={`tile ${
              openTiles.includes(index) || matchedIndices.includes(index)
                ? "open"
                : ""
            }`}
            onClick={() => handleTileClick(index)}
            disabled={matchedIndices.includes(index)}
          >
            {matchedIndices.includes(index) || openTiles.includes(index)
              ? tile
              : " "}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
