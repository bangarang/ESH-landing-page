import React from 'react';
import Footer from './Footer';
import Content from './Content';
import BackgroundImage from '../assets/bitmap@3x.png';
import Illustration from './Illustration';

const Main = () => {
  return (
    <div className="background-container">
      <div className="white-background" />
      <Content />
      <Illustration />
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
