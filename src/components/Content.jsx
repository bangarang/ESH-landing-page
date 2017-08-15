import React, {Component} from 'react';
import eshLogoLarge from '../assets/esh-logo@3x.png';
import Carousel from './Carousel';
import AOS from 'aos';
import Vivus from 'vivus';

class Content extends Component  {
  constructor(props){
    super(props);
    this.state = {
      current: 0,
    }
  }
  componentDidMount = () => {
    var self = this;
    AOS.init();
    self.textFlipper();
    self.checkDevice();
    window.addEventListener("resize", self.checkDevice);
    if (window.innerWidth > 414) {
      var illustration_two = new Vivus('illustration-two', {
        duration: 150,
        type: 'delayed'
      });
    }
  }

  checkDevice = () => {
    console.log("checkDevice"); 
    const browserWidth = window.innerWidth;
    const mobileCheck = 414;

    if (browserWidth <= mobileCheck) {
      this.setState ({
        device: 'mobile',
      });
    } else {
      this.setState({
        device: 'desktop',
      })
    }
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
    if (current === 3) {
      self.setState({current: 1 })
    } else {
      self.setState({current: current + 1 })
    }
  }
  
  render () {
    var { current, device } = this.state;
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
            { (device === 'mobile') ? 
              <svg data-aos="illustration-two" data-aos-anchor=".discover-button" data-aos-once id="illustration-two" className="illustration-two" x="0px" y="0px" width="324px" height="476px" viewBox="0 0 324 476" >
                <path className="st9" d="M150.2,392.1l28.4,16.5 M234.5,341.3l27.3,15.8 M193,267.1l24.2,14.2 M59.9,140.8l75.9,44 M101.8,115l78,45.2
                  M190.9,367.4l22.5,13.1 M61.4,293.4l20.7,11 M189.1,114.3l32.1,18.6 M230.5,88.2l32.5,18.9"/>
                <path className="st9" d="M226.9,431.2l0-29.8"/>
                <path className="st9" d="M51.9,332.9l0-34.4"/>
                <path className="st9" d="M51.9,379.8l0-39.3"/>
                <path className="st9" d="M95.7,258l0.1-139.6"/>
                <path className="st9" d="M95.8,296.3l-0.1-30.7"/>
                <path className="st9" d="M139,230l0-39.4 M139,275.8l0-31.8 M182.9,158.6v-40.1"/>
                <path className="st9" d="M226.9,327.7l0-29"/>
                <path className="st9" d="M226.9,371.9l0-26.3"/>
                <path className="st9" d="M182.9,250.5l0-29.5"/>
                <path className="st9" d="M182.9,308.2l0-34.9"/>
                <path className="st9" d="M182.9,354.5l0.1-38.6"/>
                <path className="st9" d="M227.1,82.6V45.4"/>
                <path className="st9" d="M227.1,129.5l0-39.3"/>
                <path className="st9" d="M227.1,183l0-39.3"/>
                <path className="st9" d="M220.2,440.5l-28.3,16.4 M213.6,393.9l-26.2,15.2 M216.7,292.4l-30.5,17.7 M175,216.4l-28.9,16.8 M179.1,163.9
                  l-36.8,21.3 M307.9,89l-29.6,17.2 M261,16.9l-25.9,15 M221.3,240.5l-28.2,16.4 M267.9,213.4l-34.4,20 M310.3,188.8l-36,20.9
                  M89.7,115l-29.9,17.3 M81.9,319.3l-26.7,15.5 M129.7,291.6l-20.6,12 M42.2,292.9l-27.1,15.7 M92.5,263.7l-30.7,17.8 M233.5,440.7
                  l33.3,19.2"/>
                <path data-ignore="true" className="st9 circledraw" d="M233.9,438.3c0,3.9-3.2,7.1-7,7.1l0,0c-3.9,0-7-3.2-7-7.1s3.2-7.1,7-7.1C230.8,431.2,233.9,434.4,233.9,438.3
                  L233.9,438.3z"/>
                <path data-ignore="true" className="st9 circledraw white-fill" d="M276.2,463.5c0,3-2.4,5.3-5.3,5.4c-3,0-5.3-2.4-5.3-5.3c0,0,0,0,0,0c0-3,2.4-5.3,5.3-5.3
                  C273.8,458.1,276.2,460.5,276.2,463.5C276.2,463.5,276.2,463.5,276.2,463.5L276.2,463.5z"/>
                <path data-ignore="true" className="st9 circledraw" d="M188.3,411.8c0,3-2.4,5.3-5.3,5.3l0,0c-3,0-5.3-2.4-5.3-5.3c0,0,0,0,0,0c0-3,2.4-5.3,5.3-5.3l0,0
                  C185.9,406.5,188.3,408.9,188.3,411.8z"/>
                <path data-ignore="true" className="st9 circledraw" d="M318,86.4c0,3-2.4,5.3-5.3,5.3c-3,0-5.3-2.4-5.3-5.3c0,0,0,0,0,0c0-3,2.4-5.3,5.3-5.3
                  C315.6,81.1,318,83.5,318,86.4L318,86.4z"/>
                <path data-ignore="true" className="st9 circledraw" d="M186.7,312c0,2.1-1.6,3.8-3.7,3.8c-2.1,0-3.8-1.6-3.8-3.7c0,0,0-0.1,0-0.1c0-2.1,1.7-3.8,3.8-3.8
                  C185,308.2,186.7,309.9,186.7,312L186.7,312z"/>
                <path data-ignore="true" className="st9 circledraw" d="M142.7,186.8c0,2.1-1.6,3.8-3.7,3.9c-2.1,0-3.8-1.6-3.9-3.7c0-0.1,0-0.1,0-0.2c0-2.1,1.7-3.8,3.8-3.8
                  C141,183,142.7,184.7,142.7,186.8L142.7,186.8z"/>
                <path data-ignore="true" className="st9 circledraw" d="M186.7,162.3c0,2.1-1.6,3.8-3.7,3.8c-2.1,0-3.8-1.6-3.8-3.7c0,0,0-0.1,0-0.1c0-2.1,1.7-3.8,3.8-3.8
                  C185,158.6,186.7,160.3,186.7,162.3L186.7,162.3z"/>
                <path data-ignore="true" className="st9 circledraw" d="M99.6,261.9c0,2.1-1.8,3.7-3.9,3.7c-2,0-3.6-1.7-3.7-3.7c0-2.1,1.6-3.8,3.7-3.9c2.1,0,3.8,1.6,3.9,3.7
                  C99.6,261.8,99.6,261.8,99.6,261.9z"/>
                <path data-ignore="true" className="st9 circledraw" d="M55.7,336.6c0,2.1-1.6,3.8-3.7,3.9c-2.1,0-3.8-1.6-3.9-3.7c0-0.1,0-0.1,0-0.2c0-2.1,1.7-3.8,3.8-3.8
                  C54,332.9,55.7,334.5,55.7,336.6z"/>
                <path data-ignore="true" className="st9 circledraw white-fill" d="M274.6,211c0,2.1-1.7,3.8-3.8,3.8c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.8-3.7,3.9-3.7
                  C272.9,207.4,274.6,209,274.6,211z"/>
                <path data-ignore="true" className="st9 circledraw" d="M230.9,86.4c0,2.1-1.7,3.8-3.8,3.8c-2.1,0-3.8-1.7-3.8-3.8l0,0c0-2.1,1.7-3.8,3.8-3.8
                  C229.2,82.6,230.9,84.3,230.9,86.4L230.9,86.4L230.9,86.4z"/>
                <path data-ignore="true" className="st9 circledraw" d="M230.9,186.8c0,2.1-1.8,3.7-3.9,3.7c-2,0-3.6-1.7-3.7-3.7c0-2.1,1.7-3.8,3.8-3.8
                  C229.2,183,230.9,184.7,230.9,186.8z"/>
                <path data-ignore="true" className="st9 circledraw" d="M317.5,187.2c0,2.1-1.6,3.8-3.7,3.9c-2.1,0-3.8-1.6-3.9-3.7c0-0.1,0-0.1,0-0.2c0-2.1,1.7-3.8,3.8-3.8
                  C315.8,183.4,317.5,185.1,317.5,187.2z"/>
                <path data-ignore="true" className="st9 circledraw" d="M235.8,336.6c0,4.9-4,9-8.9,9c-4.9,0-8.9-4-8.9-9c0-4.9,4-9,8.9-9S235.8,331.7,235.8,336.6z"/>
                <path data-ignore="true" className="st9 circledraw" d="M151.5,287.1c0,6.3-5.1,11.4-11.4,11.4c-6.3,0-11.4-5.1-11.4-11.4s5.1-11.4,11.4-11.4
                  C146.4,275.7,151.5,280.8,151.5,287.1z"/>
                <path data-ignore="true" className="st9 circledraw" d="M191.9,363.4c0,4.9-4,9-8.9,9c-4.9,0-8.9-4-8.9-9c0-4.9,4-9,8.9-9C187.9,354.5,191.9,358.5,191.9,363.4
                  L191.9,363.4z"/>
                <path data-ignore="true" className="st9 circledraw" d="M60.9,136.6c0,4.9-4,9-8.9,9c-4.9,0-8.9-4-8.9-9c0-4.9,4-9,8.9-9S60.9,131.7,60.9,136.6z"/>
                <path data-ignore="true" className="st9 circledraw" d="M191.9,212.1c0,4.9-4,9-8.9,9c-4.9,0-8.9-4-8.9-9c0-4.9,4-9,8.9-9C187.9,203.1,191.9,207.1,191.9,212.1
                  L191.9,212.1z"/>
                <path data-ignore="true" className="st9 circledraw white-fill" d="M279.8,111.4c0,4.9-4,9-8.9,9c-4.9,0-8.9-4-8.9-9c0-4.9,4-9,8.9-9C275.8,102.4,279.8,106.4,279.8,111.4z"/>
                <path data-ignore="true" className="st9 circledraw" d="M236.4,36.4c0,4.9-4,9-8.9,9c-4.9,0-8.9-4-8.9-9c0-4.9,4-9,8.9-9C232.4,27.5,236.4,31.5,236.4,36.4z"/>
                <path data-ignore="true" className="st9 circledraw white-fill" d="M280.9,11.8c0,5.8-4.7,10.6-10.6,10.6c-5.8,0-10.6-4.7-10.6-10.6c0-5.8,4.7-10.6,10.6-10.6
                  C276.2,1.2,280.9,6,280.9,11.8z"/>
                <path data-ignore="true" className="st9 circledraw" d="M194.3,463.1c0,6.3-5.1,11.4-11.4,11.4s-11.4-5.1-11.4-11.4s5.1-11.4,11.4-11.4S194.3,456.8,194.3,463.1z"/>
                <path data-ignore="true" className="st9 circledraw" d="M194.3,261.9c0,6.3-5.1,11.4-11.4,11.4s-11.4-5.1-11.4-11.4c0-6.3,5.1-11.4,11.4-11.4S194.3,255.6,194.3,261.9z
                  "/>
                <path data-ignore="true" className="st9 circledraw" d="M238.2,287.3c0,6.3-5.1,11.4-11.4,11.4c-6.3,0-11.4-5.1-11.4-11.4s5.1-11.4,11.4-11.4
                  C233.2,275.9,238.2,281,238.2,287.3z"/>
                <path data-ignore="true" className="st9 circledraw" d="M241.6,386.7c0,8.2-6.6,14.8-14.8,14.8c-8.2,0-14.8-6.6-14.8-14.8s6.6-14.8,14.8-14.8
                  C235,371.9,241.6,378.5,241.6,386.7z"/>
                <path data-ignore="true" className="st9 circledraw" d="M111.5,312c0,8.7-7,15.7-15.7,15.7s-15.7-7-15.7-15.7c0-8.7,7-15.7,15.7-15.7S111.5,303.3,111.5,312L111.5,312z
                  "/>
                <path data-ignore="true" className="st9 circledraw white-fill" d="M280.8,361.2c0,5.5-4.5,10-10,10c-5.5,0-10-4.5-10-10s4.5-10,10-10C276.3,351.2,280.8,355.7,280.8,361.2
                  L280.8,361.2z"/>
                <path data-ignore="true" className="st9 circledraw" d="M63.3,287.1c0,6.3-5.1,11.4-11.4,11.4c-6.3,0-11.4-5.1-11.4-11.4s5.1-11.4,11.4-11.4
                  C58.2,275.7,63.3,280.8,63.3,287.1z"/>
                <path data-ignore="true" className="st9 circledraw" d="M151.5,386.8c0,6.3-5.1,11.4-11.4,11.4c-6.3,0-11.4-5.1-11.4-11.4c0-6.3,5.1-11.4,11.4-11.4
                  C146.4,375.4,151.5,380.5,151.5,386.8z"/>
                <path data-ignore="true" className="st9 circledraw" d="M59,386.8c0,3.9-3.2,7.1-7,7.1c0,0,0,0,0,0c-3.9,0-7-3.2-7-7.1c0-3.9,3.2-7.1,7-7.1
                  C55.8,379.8,59,382.9,59,386.8L59,386.8z"/>
                <path data-ignore="true" className="st9 circledraw" d="M15.9,312c0,3.9-3.2,7.1-7,7.1c0,0,0,0,0,0c-3.9,0-7-3.2-7-7.1s3.2-7.1,7-7.1C12.8,304.9,15.9,308.1,15.9,312
                  L15.9,312z"/>
                <path data-ignore="true" className="st9 circledraw" d="M102.8,111.4c0,3.9-3.2,7.1-7,7.1c0,0,0,0,0,0c-3.9,0-7-3.2-7-7.1c0-3.9,3.2-7.1,7-7.1
                  C99.7,104.3,102.8,107.5,102.8,111.4C102.8,111.4,102.8,111.4,102.8,111.4z"/>
                <path data-ignore="true" className="st9 circledraw" d="M147.2,237c0,3.9-3.2,7.1-7,7.1l0,0c-3.9,0-7.1-3.2-7-7.1l0,0c0-3.9,3.2-7.1,7-7.1l0,0
                  C144,229.9,147.2,233.1,147.2,237L147.2,237z"/>
                <path data-ignore="true" className="st9 circledraw" d="M234.5,237c0,3.9-3.2,7.1-7,7.1l0,0c-3.9,0-7-3.2-7-7.1c0-3.9,3.2-7.1,7-7.1C231.3,229.9,234.5,233.1,234.5,237
                  L234.5,237z"/>
                <path data-ignore="true" className="st9 circledraw" d="M189.7,111.4c0,3.9-3.2,7.1-7,7.1c0,0,0,0,0,0c-3.9,0-7-3.2-7-7.1c0-3.9,3.2-7.1,7-7.1
                  C186.6,104.3,189.7,107.5,189.7,111.4C189.7,111.4,189.7,111.4,189.7,111.4z"/>
                <path data-ignore="true" className="st9 circledraw" d="M234.2,136.6c0,3.9-3.2,7.1-7,7.1l0,0c-3.9,0-7-3.2-7-7.1c0-3.9,3.2-7.1,7-7.1
                  C231,129.5,234.2,132.7,234.2,136.6L234.2,136.6z"/>
              </svg>
            : null }
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
