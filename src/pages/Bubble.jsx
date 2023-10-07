import React from "react";
import "./Bubble.css";

const Bubble = ({ id, x, y, popped, onClick, color }) => {
  const bubbleStyle = {
    left: `${x}px`,
    top: `${y}px`,
    backgroundColor: color,
  };

  return (
    <div
      className={`bubble ${popped ? "popped" : ""}`}
      style={bubbleStyle}
      onClick={() => onClick(id)}
    ></div>
  );
};

export default Bubble;
