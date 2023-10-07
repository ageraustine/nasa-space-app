import React from 'react';
import './Bubble.css';

const Bubble = ({ id, x, y, popped, onClick }) => {
  const bubbleStyle = {
    left: `${x}px`,
    top: `${y}px`,
  };

  return (
    <div
      className={`bubble ${popped ? 'popped' : ''}`}
      style={bubbleStyle}
      onClick={() => onClick(id)}
    ></div>
  );
};

export default Bubble;
