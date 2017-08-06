import React from 'react';

const LeftColumn = () => {
  return (
    <div className="left-column">
      <div className="left-content-one">
        <p className="small-info">
          Today, robust and reliable internet access is<br />
          the cornerstone to powering technology in the<br />
          classroom. Yet more than 11 million students<br />
          across the country still do not have high-speed<br />
          broadband in their schools.<br />
          <br />
          EducationSuperHighway is the leading non-<br />
          profit working in partnership with school<br />
          district leaders to ensure every student has the<br />
          opportunity to take advantage of the promise<br />
          of digital learning.
        </p>
        <p className="large-info teal">
          Together, we can<br />
          accelerate your<br />
          school district’s digital future.
        </p>
        <div className="discover-button">
          <p className="discover-text">
            DISCOVER HOW
          </p>
        </div>
      </div>
      <div className="left-content-two">
        <p className="large-info black">
          EducationSuperHighway<br />
          was founded by a parent<br />
          who saw the need to<br />
          bring national attention to<br />
          the K-12 connectivity gap.
        </p>
        <p className="small-info">
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
