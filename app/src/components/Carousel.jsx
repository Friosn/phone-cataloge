import './carousel.css';

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const { children } = props;

  useEffect(() => {
    setLength(children.length);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="left-arrow">⬅️</button>
        <div className="carousel-content-wrapper">
          <div className="carousel-content">{children}</div>
        </div>
        <button className="right-arrow">➡️</button>
      </div>
    </div>
  );
};

export default Carousel;
