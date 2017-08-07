import React from 'react';

const LeftColumn = () => {
  return (
    <div className="left-column">
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
    </div>
  );
}

export default LeftColumn;
