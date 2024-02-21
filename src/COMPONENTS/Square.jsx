/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Square({ value, onSquerClick }) {
  return (
    <>
      <button className="square" onClick={onSquerClick}>
        {value}
      </button>
    </>
  );
}
