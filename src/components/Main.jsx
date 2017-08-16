import React from 'react';
import Footer from './Footer';
import Content from './Content';
import BackgroundImage from '../assets/bottom-image.png';
// import BackgroundImageMobile from '../assets/yellowBG_mobile.jpg';
import Illustration from './Illustration';

const Main = () => {
  return (
    <span>
      <div className="background-container" data-img={BackgroundImage}>
        <div className="white-background" />
        <Content />
        <Illustration />
      </div>
      <Footer />
    </span> 
  );
};

export default Main;
