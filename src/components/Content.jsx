import React, {Component} from 'react';
import eshLogoLarge from '../assets/esh-logo@3x.png';
import Carousel from './Carousel';
import AOS from 'aos';

class Content extends Component  {
  constructor(props){
    super(props);
    this.state = {
      current: 0
    }
  }
  componentDidMount = () => {
    var self = this;
    AOS.init();
    self.textFlipper();
  }
  textFlipper = () => {
    var self = this;
    setInterval( 
      self.flipText, 
      2000
    )
  }

  flipText = () => {
     var self = this;
    var { current } = self.state; 
    if (current == 3) {
      self.setState({current: 1 })
    } else {
      self.setState({current: current + 1 })
    }
  }
  
  render () {
    var { current } = this.state;
    var fliptextclass;
    if (current > 0) {
      fliptextclass = "text_" + current;
    }
    return (
      <div className="content-container">
        <img
          data-aos="fade-down"
          data-aos-delay="1300"
          className="esh-logo"
          src={eshLogoLarge}
          alt="Educational Superhighway"
        />
        <p data-aos="fade-up" data-aos-delay="800" className="header tk-museo-slab">
          Accelerate Your School District's Digital Future
        </p>
        <p data-aos="fade-up" data-aos-delay="1000" className="sub-header">
          Ensuring high-speed Internet connections for America's students
        </p>
        <div className="column-container">
          <div className="left-content-one">
            <p className="small-info left-info-one" data-aos="fade-right" data-aos-delay="500">
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
            <p className="large-info teal left-info-two tk-museo-slab" data-aos="fade-right" data-aos-delay="500">
              Together, we can
              accelerate your school
              district’s digital future.
            </p>
            <div data-aos="fade-right" data-aos-delay="500">
              <a className="discover-button">
                DISCOVER HOW
              </a>
            </div> 
          </div>
          <div className="right-content-one">
            <p className="small-info right-info-one" data-aos="fade-left" data-aos-delay="500">
              We offer
            </p>
            <p className="orange-text" data-aos="fade-left" data-aos-delay="500">
              <span className={"textflipper " + fliptextclass }>
                <span>technical assistance</span>
                <span>price comparison tools</span>
                <span>procurement resources</span>
             </span>
            </p>
            <div className="orange-underline"  data-aos="fade-left" data-aos-delay="500"/>
            <p className="small-info right-info-two" data-aos="fade-left" data-aos-delay="500">
              to help you arrive at sustainable Internet
              solutions for your schools.
              <br /><br />
              Our team is here to help you plan and
              implement a network upgrade. We also work
              with you to maximize the federal and state
              funds available for school connectivity.
            </p>
            <p className="large-info teal right-info-three tk-museo-slab"  data-aos="fade-left" data-aos-delay="500">
              There is no catch.
              Everything we do for
              school districts is free
              of charge.
            </p>
          </div>
          <div className="left-content-two">
            <p className="large-info black left-info-three tk-museo-slab" data-aos="fade-right" data-aos-delay="500">
              EducationSuperHighway
              was founded by a parent
              who saw the need to
              bring national attention to
              the K-12 connectivity gap.
            </p>
            <p className="small-info left-info-four"  data-aos="fade-right" data-aos-delay="500">
              Since then we’ve helped thousands of school<br />
              districts test their Internet speeds and<br />
              supported hundreds through the process of<br />
              upgrading. And now our task is simple:<br />
              connect the remaining school districts.
            </p>
            <a
              data-aos="fade-right" data-aos-delay="500"
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
}

export default Content;
