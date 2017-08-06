import React from 'react';
import Footer from './Footer';
import Content from './Content';

const Main = () => {
  return (
    <div className="main-background background">
      <Content />
      <div className="top-background background"></div>
      <div className="middle-background background"></div>
      <div className="bottom-background background"></div>
      <Footer />
    </div>
  );
};

export default Main;
