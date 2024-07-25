import React, { useState } from 'react';


const images = [
  'C:/Users/Shubd/OneDrive/Desktop/img1.htmlg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  
];

// Child component to display a single slide
const Slide = ({ imageUrl }) => {
  return (
    <div className="slide">
      <img src={imageUrl} alt="slide" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
};

// Parent slider component
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="slider">
      <button onClick={goToPrevSlide}>Prev</button>
      <Slide imageUrl={images[currentSlide]} />
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Slider;
