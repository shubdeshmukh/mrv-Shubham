import React from 'react';
import Slider from './Slider'; // Import the Slider component

const App = () => {
  // Example list of image URLs
  const images = [
    'https://via.placeholder.com/600x400?text=Slide+1',
    'https://via.placeholder.com/600x400?text=Slide+2',
    'https://via.placeholder.com/600x400?text=Slide+3',
  ];

  return (
    <div>
      <h1>Image Gallery Slider</h1>
      <Slider images={images} />
    </div>
  );
};

export default App;
