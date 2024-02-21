/* eslint-disable react/prop-types */
import "../../public/App.css";
function Square({ value, onSquereClick }) {
  return (
    <button className="square" onClick={onSquereClick}>
      {value}
    </button>
  );
} 
export default Square;
