import React from 'react';
import Footer from './Footer';
import Content from './Content';
import BackgroundImage from '../assets/bitmap@3x.png';

const Main = () => {
  return (
    <div className="background-container">
      <div className="white-background" />
      <Content />
      <div className="main-background">
        <div className="background-image-container">
          <div className="image-gradient" />
          <img
            className="background-image"
            src={BackgroundImage}
            alt="Background Photo"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
