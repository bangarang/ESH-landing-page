import React, {Component} from 'react';
import Chevron from '../assets/chevron.png';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      device: 'desktop',
      firstQuote: true,
      secondQuote: false,
    };

    this.carouselSwitch = this.carouselSwitch.bind(this);
    this.checkDevice = this.checkDevice.bind(this);
  }
  componentDidMount() {
    this.checkDevice();
    window.addEventListener("resize", this.checkDevice);
  }
  checkDevice() {
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
  carouselSwitch() {
    this.setState({
      firstQuote: !this.state.firstQuote,
      secondQuote: !this.state.secondQuote,
    })
  }
  render() {
    let {device, firstQuote, secondQuote} = this.state;

    const quoteOne = () => {
      return (
        <div>
        <p className="italic-info tk-museo-slab">
          In the beginning, we thought that
          this was too good to be true. What
          EducationSuperHighway is doing&mdash;
          at no cost and while being so helpful
          —is so hard to believe.
        </p>
        <p className="extra-small-info">
          Darla Meeuwsen, Superintendent<br />
          Sauvie Island Academy, Oregon
        </p>
        </div>
      );
    }
    const quoteTwo = () => {
      return (
        <div>
          <p className="italic-info tk-museo-slab">
            We are so grateful for all your help
            with the RFP. Getting fiber to our
            district is a bigger project than we
            have ever taken on, but you made it seem easy!
          </p>
          <p className="extra-small-info">
            John Wehrman, Technology Director<br />
            Cayuse Prairie School District, Montana
          </p>
        </div>
      );
    }
    const renderCarousel = () => {
      if (device === 'desktop') {
        return (
          <div>
            {quoteOne()}
            <div className="black-line" />
            {quoteTwo()}
          </div>
        );
      } else if (device === 'mobile') {
        return (
          <div
            className="carousel-container"
            onClick={this.carouselSwitch}
          >
            <img
              className="chevron-left carousel-icons"
              src={Chevron}
              alt="Chevron Left"
            />
            {firstQuote ? quoteOne() : ''}
            {secondQuote ? quoteTwo() : ''}
            <img
              className="chevron-right carousel-icons"
              src={Chevron}
              alt="Chevron Right"
            />
          </div>
        );
      }
    }
    return (
      <div>
        {renderCarousel()}
      </div>
    );
  }
}

export default Carousel;
