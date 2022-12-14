import './carousel.css';

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import GalleryStyled from '../ui/GalleryStyled';
const Carousel = (props) => {
  console.log(props);
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);
  console.log(props);
  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <GalleryStyled>
      <div className="carousel-container">
        <div className="btn_left">
          {currentIndex > 0 && (
            <button onClick={prev} className="left-arrow">
              <img
                src="https://res.cloudinary.com/dfrmvbvdc/image/upload/v1668276818/Icon-set/Arrows/left_a1eaau.png"
                alt="scroll-left"
                height="30"
              />
            </button>
          )}
        </div>
        <div className="carousel-wrapper">
          <div className="carousel-content-wrapper">
            <div
              className="carousel-content"
              style={{
                transform: `translateX(-${currentIndex * 30}%)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
        <div className="btn_right">
          {currentIndex < length - 1 && (
            <button onClick={next} className="right-arrow">
              <img
                src="https://res.cloudinary.com/dfrmvbvdc/image/upload/v1668277226/Icon-set/Arrows/right-chevron_ldy4nz.png"
                alt="scroll-right"
                height="30"
              />
            </button>
          )}
        </div>
      </div>
    </GalleryStyled>
  );
};

export default Carousel;
