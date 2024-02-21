import { useState } from "react";
import "../public/App.css";
import Square from "./COMPONENTS/Square";

export default function Board() {
  const [squers, setSquers] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const handleSquereClick = (i) => {
    const nextSquers = squers.slice();

    nextSquers[i] = "X";
    isX ? (nextSquers[i] = "X") : (nextSquers[i] = "Y");
    // setSquers([...squers]);
    setSquers(nextSquers);
    setIsX(!isX);
  };
  return (
    <>
      <div className="board-row">
        <Square value={squers[0]} onSquereClick={() => handleSquereClick(0)} />
        <Square value={squers[1]} onSquereClick={() => handleSquereClick(1)} />
        <Square value={squers[2]} onSquereClick={() => handleSquereClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squers[3]} onSquereClick={() => handleSquereClick(3)} />
        <Square value={squers[4]} onSquereClick={() => handleSquereClick(4)} />
        <Square value={squers[5]} onSquereClick={() => handleSquereClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squers[6]} onSquereClick={() => handleSquereClick(6)} />
        <Square value={squers[7]} onSquereClick={() => handleSquereClick(7)} />
        <Square value={squers[8]} onSquereClick={() => handleSquereClick(8)} />
      </div>
    </>
  );
}
