import React from 'react';
import nytLogoLarge from '../assets/NYT.jpg';
// import nytLogoMedium from '../assets/nyt@2x.png';
// import nytLogoSmall from '../assets/nyt.png';
import eduWeekLogoLarge from '../assets/Education-Week.jpg';
// import eduWeekLogoMedium from '../assets/edu-week@2x.png';
// import eduWeekLogoSmall from '../assets/edu-week.png';
import edSurgeLogoLarge from '../assets/EdSurge.jpg';
// import edSurgeLogoMedium from '../assets/ed-surge@2x.png';
// import edSurgeLogoSmall from '../assets/ed-surge.png';
import techLearnLogoLarge from '../assets/TandL.jpg';
// import techLearnLogoMedium from '../assets/tech-learning@2x.png';
// import techLearnLogoSmall from '../assets/tech-learning.png';
import usaTodayLogoLarge from '../assets/USAToday.jpg';
// import usaTodayLogoMedium from '../assets/usa-today@2x.png';
// import usaTodayLogoSmall from '../assets/usa-today.png';

const Footer = () => {
  return(
    <div className="footer-container">
      <p className="footer-text tk-museo-slab">
        As seen in:
      </p>
      <div className="footer-images-container">
        <img
          className="footer-logo edu-week"
          src={eduWeekLogoLarge}
          alt="Education Week"
        />
        <img
          className="footer-logo usa-today"
          src={usaTodayLogoLarge}
          alt="USA Today"
        />
        <img
          className="footer-logo nyt"
          src={nytLogoLarge}
          alt="New York Times"
        />
        <img
          className="footer-logo ed-surge"
          src={edSurgeLogoLarge}
          alt="EdSurge"
        />
        <img
          className="footer-logo tech-learning"
          src={techLearnLogoLarge}
          alt="Tech & Learning"
        />
      </div>
    </div>
  );
}

export default Footer;
