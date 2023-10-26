import React from 'react';

function Line({ color, text, position = 'left', textSize }) {
  const textSizeClass = textSize ? `text-${textSize}` : 'text-2xl';
  
  return (
    <p className={`mx-auto text-white my-20 border-b-6 border-${color} p-0 ${textSizeClass} w-11/12 text-${position}`}>
      {text}
    </p>
  );
}

export default Line;
