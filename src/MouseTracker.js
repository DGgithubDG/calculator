// MouseTracker.js
import React, { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: 'white',
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      ></div>
    </div>
  );
};

export default MouseTracker;
