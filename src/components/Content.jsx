import React from 'react';
import eshLogoLarge from '../assets/esh-logo@3x.png';
import Carousel from './Carousel';

const Content = () => {
  return (
    <div className="content-container">
      <img
        className="esh-logo"
        src={eshLogoLarge}
        alt="Educational Superhighway"
      />
      <p className="header tk-museo-slab">
        Accelerate Your School District's Digital Future
      </p>
      <p className="sub-header">
        Ensuring high-speed Internet connections for America's students
      </p>
      <div className="column-container">
        <div className="left-content-one">
          <p className="small-info left-info-one">
            Today, robust and reliable internet access is
            the cornerstone to powering technology in the
            classroom. Yet more than 11 million students
            across the country still do not have high-speed
            broadband in their schools.
            <br /><br />
            EducationSuperHighway is the leading non-
            profit working in partnership with school
            district leaders to ensure every student has the
            opportunity to take advantage of the promise
            of digital learning.
          </p>
          <p className="large-info teal left-info-two tk-museo-slab">
            Together, we can
            accelerate your school
            district’s digital future.
          </p>
          <div className="discover-button">
            <p className="discover-text">
              DISCOVER HOW
            </p>
          </div>
        </div>
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
        <div className="left-content-two">
          <p className="large-info black left-info-three tk-museo-slab">
            EducationSuperHighway
            was founded by a parent
            who saw the need to
            bring national attention to
            the K-12 connectivity gap.
          </p>
          <p className="small-info left-info-four">
            Since then we’ve helped thousands of school<br />
            districts test their Internet speeds and<br />
            supported hundreds through the process of<br />
            upgrading. And now our task is simple:<br />
            connect the remaining school districts.
          </p>
          <a
            className="link-text"
            href=""
          >
            Learn more about how we help school districts.
          </a>
        </div>
        <div className="right-content-two">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Content;
