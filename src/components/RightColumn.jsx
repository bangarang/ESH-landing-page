import React from 'react';

const RightColumn = () => {
  return (
    <div className="right-column">
      <div className="right-content-one">
        <p className="small-info right-info-one">
          We offer
        </p>
        <p className="orange-text">
          technical assistance
          <div className="orange-underline" />
        </p>
        <p className="small-info right-info-two">
          to help you arrive at sustainable Internet<br />
          solutions for your schools.<br />
          <br />
          Our team is here to help you plan and<br />
          implement a network upgrade. We also work<br />
          with you to maximize the federal and state<br />
          funds available for school connectivity.
        </p>
        <p className="large-info teal right-info-three">
          There is no catch.<br />
          Everything we do for<br />
          school districts is free<br />
          of charge.
        </p>
      </div>
      <div className="right-content-two">
        <p className="italic-info">
          In the beginning, we thought that<br />
          this was too good to be true. What<br />
          EducationSuperHighway is doing&mdash;<br />
          at no cost and while being so helpful<br />
          —is so hard to believe.
        </p>
        <p className="extra-small-info">
          Darla Meeuwsen, Superintendent<br />
          Sauvie Island Academy, Oregon
        </p>
        <div className="black-line" />
        <p className="italic-info">
          We are so grateful for all your help<br />
          with the RFP. Getting fiber to our<br />
          district is a bigger project than we<br />
          have ever taken on, but you made it<br />seem easy!
        </p>
        <p className="extra-small-info">
          John Wehrman, Technology Director<br />
          Cayuse Prairie School District, Montana
        </p>
      </div>
      <div className="right-block" />
    </div>
  );
}

export default RightColumn;
