import React from 'react';
import illustrationOne from '../assets/diagram-vector@3x.png';
import illustrationTwo from '../assets/diagram-vector-2@3x.png';

const Illustration = () => {
  return (
    <div className="illustration-container">
      <img
        className="illustration-one"
        src={illustrationOne}
        alt="Illustration One"
      />
      <img
        className="illustration-two"
        src={illustrationTwo}
        alt="Illustration Two"
      />
    </div>
  );
}

export default Illustration;
