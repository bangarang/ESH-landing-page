import React from 'react';
import Carousel from './Carousel';

const RightColumn = () => {
  return (
    <div className="right-column">
      <div className="right-content-one">
        <p className="small-info right-info-one">
          We offer
        </p>
        <p className="orange-text">
          technical assistance
        </p>
        <div className="orange-underline" />
        <p className="small-info right-info-two">
          to help you arrive at sustainable Internet
          solutions for your schools.
          <br /><br />
          Our team is here to help you plan and
          implement a network upgrade. We also work
          with you to maximize the federal and state
          funds available for school connectivity.
        </p>
        <p className="large-info teal right-info-three tk-museo-slab">
          There is no catch.
          Everything we do for
          school districts is free
          of charge.
        </p>
      </div>
      <div className="right-content-two">
        <Carousel />
      </div>
    </div>
  );
}

export default RightColumn;
