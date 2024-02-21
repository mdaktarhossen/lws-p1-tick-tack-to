import { useState } from "react";
import Square from "./Square";

export default function Bord() {
  const [squers, setSquers] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const handleSqureClick = (i) => {
    const nextSqure = squers.slice();
    isX ? (nextSqure[i] = "X") : (nextSqure[i] = "Y");
    setSquers(nextSqure);
    setIsX(!isX);
  };
  return (
    <>
      <div className="board-row">
        <Square value={squers[0]} onSquerClick={() => handleSqureClick(0)} />
        <Square value={squers[1]} onSquerClick={() => handleSqureClick(1)} />
        <Square value={squers[2]} onSquerClick={() => handleSqureClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squers[3]} onSquerClick={() => handleSqureClick(3)} />
        <Square value={squers[4]} onSquerClick={() => handleSqureClick(4)} />
        <Square value={squers[5]} onSquerClick={() => handleSqureClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squers[6]} onSquerClick={() => handleSqureClick(6)} />
        <Square value={squers[7]} onSquerClick={() => handleSqureClick(7)} />
        <Square value={squers[8]} onSquerClick={() => handleSqureClick(8)} />
      </div>
    </>
  );
}
