import React from 'react';
import eshLogoLarge from '../assets/esh-logo@3x.png';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Illustration from './Illustration';

const Content = () => {
  return (
    <div className="content-container">
      <img
        className="esh-logo"
        src={eshLogoLarge}
        alt="Educational Superhighway"
      />
      <p className="header">
        Accelerate Your School District's Digital Future
      </p>
      <p className="sub-header">
        Ensuring high-speed Internet connections for America's students
      </p>
      <Illustration />
      <div className="column-container">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}

export default Content;
