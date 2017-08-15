import React, {Component} from 'react';
import illustrationOne from '../assets/diagram-vector@3x.png';
import illustrationTwo from '../assets/diagram-vector-2@3x.png';
import Vivus from 'vivus';

// import scrollMajig from './scrollMajig.js';

class Illustration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () =>{
    var illustration_one = new Vivus('illustration-one', {
      duration: 90,
      type: 'delayed',
      delay: 30,
      animTimingFunction: Vivus.EASE,
      start: 'manual'
    });
    document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");
      illustration_one.play();
    });
    if (window.innerWidth > 414) {
      var illustration_two = new Vivus('illustration-two', {
        duration: 150,
        type: 'delayed'
      });
    }

    this.checkDevice();
    window.addEventListener("resize", this.checkDevice);
  }

  checkDevice = () => {
    const browserWidth = window.innerWidth;
    const mobileCheck = 414;

    if (browserWidth <= mobileCheck) {
      this.setState ({
        device: 'mobile',
      });
    } else {
      this.setState({
        device: 'desktop',
      });
    }
  }

  render = () => {
    var { device } = this.state;
    return (
      <div className="illustration-container">
        <svg id="illustration-one" className="illustration-one" x="0px" y="0px" width="936.8px" height="2093.9px" viewBox="0 0 936.8 2093.9" >
          <g id="Page-1_7_">
            <g id="ESH-LandingPage_Desktop">
              <g id="diagram-vector-CLEAN" transform="translate(323.000000, 349.000000)" className="st0">
                <path id="Path" className="st1 long-line" d="M152.4,306.8v1438.1"/>
                <path id="Path_1_" className="st1" d="M152.4,262.3v23.3"/>
                <path id="Path_2_" className="st1" d="M237.9,56.2v32.9"/>
                <path id="Path_3_" className="st1" d="M237.9,5.7v36.9"/>
                <path id="Path_4_" className="st1" d="M237.9-45.1v40.3"/>
                <path id="Path_5_" className="st1" d="M237.9-92.6v40.1"/>
                <path id="Shape" className="st1" d="M280.5,79.3v33.8"/>
                <path id="Shape_1_" className="st1" d="M280.5,31.4v40.4"/>
                <path id="Shape_2_" className="st1" d="M280.5-64.3v82.4"/>
                <path id="Shape_3_" className="st1" d="M409.3-42.1v35.5"/>
                <path id="Shape_4_" className="st1" d="M323.4,153.6V191"/>
                <path id="Shape_5_" className="st1" d="M323.4,61.3v81.6"/>
                <path id="Shape_6_" className="st1" d="M323.4,6.1V37"/>
                <path id="Shape_7_" className="st1" d="M366.8-13.4v177.1"/>
                <path id="Path_6_" className="st1" d="M366.8,227.3v151.1"/>
                <path id="Path_7_" className="st1" d="M33.6-78.5l27.6-16"/>
                <path id="Path_8_" className="st1" d="M198.2-75.1l34.7-20.1"/>
                <path id="Path_9_" className="st1" d="M335.1-106.3l43.9-25.9"/>
                <path id="Path_10_" className="st1" d="M247.8,95.1l29-17.8"/>
                <path id="Path_11_" className="st1" d="M-99.3-2.9l33-19.1"/>
                <path id="Path_12_" className="st1" d="M-239.1,78.2l127.7-74.1"/>
                <path id="Path_13_" className="st1" d="M116.7-28.4l27.2-14.9"/>
                <path id="Path_14_" className="st1" d="M328-1.8l29.4-17"/>
                <path id="Path_15_" className="st1" d="M286.8,22.1l32.5-18.9"/>
                <path id="Path_16_" className="st1" d="M334.2,44.2l69.2-40.1"/>
                <path id="Path_17_" className="st1" d="M115.8,71.1l72-41.8"/>
                <path id="Path_18_" className="st1" d="M155.6,97.8l75.8-44"/>
                <path id="Path_19_" className="st1" d="M243.9,145.4l26.6-15.4"/>
                <path id="Path_20_" className="st1" d="M204.8,168l27-15.7"/>
                <path id="Path_21_" className="st1" d="M119.1,19.6l70.4-40.8"/>
                <path id="Path_22_" className="st1" d="M75.5,44.8l24.1-14"/>
                <path id="Path_23_" className="st1" d="M-55.3,169l74.2-43"/>
                <path id="Path_24_" className="st1" d="M-101.4,293.6l73.6-42.7"/>
                <path id="Path_25_" className="st1" d="M-13.8,194.7l76.6-44.9"/>
                <path id="Path_26_" className="st1" d="M73.7-54.2l22.2-12.9"/>
                <path id="Path_27_" className="st1" d="M-95.8-53.5l27.9-16.2"/>
                <path id="Path_28_" className="st1" d="M-53.1,19.7l19.8-11.5"/>
                <path id="Path_29_" className="st1" d="M-82.5,36.8l9.9-5.8"/>
                <path id="Path_30_" className="st1" d="M72.3,194.9l31.2-18.1"/>
                <path id="Path_31_" className="st1" d="M112.7,220.8l32-18.6"/>
                <path id="Path_32_" className="st1" d="M330.8,244.2l31.4-19"/>
                <path id="Path_33_" className="st1" d="M329.4,194.7l29.9-17.4"/>
                <path id="Path_34_" className="st1" d="M245.6,194.5l73-43.2"/>
                <path id="Path_35_" className="st1" d="M414.3,293.3l123.5-70.7"/>
                <path id="Path_36_" className="st1" d="M165.5,239.4l23.8-13.8"/>
                <path id="Path_37_" className="st1" d="M-69.1-76.8l-27.6-16"/>
                <path id="Shape_8_" className="st1" d="M-105.5-191.3v83.2"/>
                <path id="Shape_9_" className="st1" d="M109.1-304.6v33.6"/>
                <path id="Shape_10_" className="st1" d="M109.1-117.3v30"/>
                <path id="Shape_11_" className="st1" d="M-63.1-20.1v33.9"/>
                <path id="Shape_12_" className="st1" d="M-63.1-66.3v38.7"/>
                <path id="Shape_13_" className="st1" d="M-20,53.6v137.5"/>
                <path id="Shape_14_" className="st1" d="M-20,15.9V46"/>
                <path id="Shape_15_" className="st1" d="M22.6,127.5v142.3"/>
                <path id="Shape_16_" className="st1" d="M22.6,81.2v38.7"/>
                <path id="Shape_17_" className="st1" d="M22.6,36.2v31"/>
                <path id="Shape_18_" className="st1" d="M65.8,151.5V191"/>
                <path id="Shape_19_" className="st1" d="M-105.5,105.2v84"/>
                <path id="Shape_20_" className="st1" d="M-105.5-36.8v30.3"/>
                <path id="Shape_21_" className="st1" d="M109.1-15v28.8"/>
                <path id="Shape_22_" className="st1" d="M109.1-59v26.4"/>
                <path id="Shape_23_" className="st1" d="M152.4-143.5v85.6"/>
                <path id="Shape_24_" className="st1" d="M65.8,61v29.7"/>
                <path id="Shape_25_" className="st1" d="M65.8,4.2v34.3"/>
                <path id="Shape_26_" className="st1" d="M65.8-41.4v37.9"/>
                <path id="Shape_27_" className="st1" d="M109.4,226.6V263"/>
                <path id="Shape_28_" className="st1" d="M109.4,180.1V219"/>
                <path id="Shape_29_" className="st1" d="M109.4,127.5v38.8"/>
                <path id="Shape_30_" className="st1" d="M237.1,207.5v88.3"/>
                <path id="Shape_31_" className="st1" d="M237.1,155.3v34.5"/>
                <path id="Path_38_" className="st1" d="M152.4,103.5v85.7"/>
                <path id="Path_39_" className="st1" d="M186.1-176.7l-29.7-16.6"/>
                <path id="Path_40_" className="st1" d="M231.2-151.4L201.6-168"/>
                <path id="Path_41_" className="st1" d="M17.5-124.6l-119-69.5"/>
                <path id="Path_42_" className="st1" d="M-29.5-103.7l-196.8-113.5"/>
                <path id="Path_43_" className="st1" d="M102.5-126.2l-27.6-16"/>
                <path id="Path_44_" className="st1" d="M145.9-294.8L119-310.4"/>
                <path id="Path_45_" className="st1" d="M183.7-129.2l-27.5-15.9"/>
                <path id="Path_46_" className="st1" d="M234.2-50.2l-36.7-21.3"/>
                <path id="Path_47_" className="st1" d="M190.5-26.8l-29.2-16.9"/>
                <path id="Path_48_" className="st1" d="M233.2-2.1l-33.5-19.4"/>
                <path id="Path_49_" className="st1" d="M187.1,21.8l-70.9-40.4"/>
                <path id="Path_50_" className="st1" d="M231,46.8l-30.4-17.3"/>
                <path id="Path_51_" className="st1" d="M318.7,145.7l-29-15.4"/>
                <path id="Path_52_" className="st1" d="M358.9,168.3L328.2,151"/>
                <path id="Path_53_" className="st1" d="M96.3-80.1L70-95.4"/>
                <path id="Path_54_" className="st1" d="M99.1,19.7L69,2.3"/>
                <path id="Path_55_" className="st1" d="M58.1,94.6L29.5,78"/>
                <path id="Path_56_" className="st1" d="M62.1,146.3l-36-20.4"/>
                <path id="Path_57_" className="st1" d="M188.3,219.7l-28.7-16.6"/>
                <path id="Path_58_" className="st1" d="M230.1,194.5l-26.6-15.4"/>
                <path id="Path_59_" className="st1" d="M316.9,195.4l-73.6-42.7"/>
                <path id="Path_60_" className="st1" d="M142.8,291.1l-25.5-14.8"/>
                <path id="Path_61_" className="st1" d="M255.2,306.8l-55.6-33.2"/>
                <path id="Path_62_" className="st1" d="M404.7,293.4l-74.4-41.9"/>
                <path id="Path_63_" className="st1" d="M103.5,71.3l-27.9-16"/>
                <path id="Path_64_" className="st1" d="M149.4,97.6l-33.8-19.4"/>
                <path id="Path_65_" className="st1" d="M191.2,121.6l-35.5-20.3"/>
                <path id="Path_66_" className="st1" d="M-26.1,194.3l-29.6-16.5"/>
                <path id="Path_67_" className="st1" d="M-33.6-6.7L-59.9-22"/>
                <path id="Path_68_" className="st1" d="M13.4,20.5L-7.2,8.6"/>
                <path id="Path_69_" className="st1" d="M-72.6,19.4L-99.7,4.1"/>
                <path id="Path_70_" className="st1" d="M-23.3,48.1l-29.5-17.2"/>
                <path id="Path_71_" className="st1" d="M272.9-77.6l-30.6-18.2"/>
                <path id="Path_72_" className="st1" d="M403.7-3.7L376-19.6"/>
                <path id="Path_73_" className="st1" d="M531.9,69.8L415.6,3.1"/>
                <path id="Path_74_" className="st1" d="M403.2-50.6l-33.3-20.8"/>
                <path id="Shape_32_" className="st1" d="M244.4-148.4c0-3.8-3.1-6.9-6.9-7l0,0c-3.8,0-6.9,3.1-6.9,6.9l0,0c0,3.8,3.1,6.9,6.9,6.9
                  C241.3-141.4,244.4-144.6,244.4-148.4L244.4-148.4L244.4-148.4z"/>
                <path id="Shape_33_" className="st1" d="M244.4,49.3c0-3.8-3.1-6.9-6.9-6.9c-3.8,0-6.9,3.1-6.9,6.9l0,0c0,3.8,3.1,6.9,6.9,6.9
                  C241.3,56.2,244.4,53.1,244.4,49.3L244.4,49.3z"/>
                <path id="Shape_34_" className="st1" d="M416.3-49.1c0-3.8-3.1-6.9-6.9-7l0,0c-3.8,0-6.9,3.1-6.9,6.9l0,0c0,3.8,3.1,6.9,6.9,7l0,0
                  C413.2-42.1,416.3-45.2,416.3-49.1L416.3-49.1z"/>
                <path id="Shape_35_" className="st1" d="M416.3,0.3c0-3.8-3.1-6.9-6.9-6.9c-3.8,0-6.9,3.1-6.9,6.9s3.1,6.9,6.9,6.9
                  C413.2,7.2,416.3,4.1,416.3,0.3L416.3,0.3z"/>
                <path id="Shape_36_" className="st1" d="M287.4,24.8c0-3.8-3.1-6.9-6.9-7l0,0c-3.8,0-6.9,3.1-6.9,6.9l0,0c0,3.8,3.1,6.9,6.9,7l0,0
                  C284.3,31.7,287.4,28.6,287.4,24.8L287.4,24.8z"/>
                <path id="Shape_37_" className="st1" d="M244.8,148.4c0-3.8-3.1-6.9-6.9-7c-3.8,0-6.9,3.1-6.9,6.9l0,0c0,3.8,3.1,6.9,6.9,7l0,0
                  C241.7,155.3,244.8,152.2,244.8,148.4L244.8,148.4L244.8,148.4z"/>
                <path id="Path_75_" className="st1" d="M29.7-270.7l69.4-40.2L29.7-270.7z"/>
                <path id="Path_76_" className="st1" d="M113.8-268.6l33.6-19.5L113.8-268.6z"/>
                <path id="Path_77_" className="st1" d="M75.7-246.5l28.9-16.8L75.7-246.5z"/>
                <path id="Path_78_" className="st1" d="M117-176.4l31.3-18.2L117-176.4z"/>
                <path id="Path_79_" className="st1" d="M157.3-150.6l28.3-16.4L157.3-150.6z"/>
                <path id="Path_80_" className="st1" d="M115.4-126.3l32.9-19.1L115.4-126.3z"/>
                <path id="Shape_38_" className="st1" d="M152.4-285.5v83.7"/>
                <path id="Shape_39_" className="st1" d="M152.4-337.4v38"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_40_" d="M159.4-292.5c0-3.8-3.1-6.9-6.9-6.9c-3.8,0-6.9,3.1-6.9,6.9l0,0c0,3.8,3.1,6.9,6.9,6.9
                  C156.3-285.5,159.4-288.6,159.4-292.5L159.4-292.5z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_41_" d="M116.1-124c0-3.8-3.1-6.9-6.9-7l0,0c-3.8,0-6.9,3.1-6.9,6.9l0,0c0,3.8,3.1,6.9,6.9,7l0,0
                  C113-117,116.1-120.1,116.1-124L116.1-124z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_42_" d="M114.4-265.7c0-2.9-2.4-5.3-5.3-5.3l0,0c-2.9,0-5.3,2.4-5.3,5.3l0,0c0,2.9,2.4,5.3,5.3,5.3
                  C112.1-260.4,114.4-262.8,114.4-265.7z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_43_" d="M157.7-196.5c0-2.9-2.4-5.3-5.3-5.3l0,0c-2.9,0-5.3,2.4-5.3,5.3l0,0c0,2.9,2.4,5.3,5.3,5.3
                  l0,0C155.3-191.2,157.7-193.6,157.7-196.5z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_44_" d="M157.7-148.8c0-2.9-2.4-5.3-5.3-5.3l0,0c-2.9,0-5.3,2.4-5.3,5.3l0,0c0,2.9,2.4,5.3,5.3,5.3
                  l0,0C155.3-143.5,157.7-145.9,157.7-148.8L157.7-148.8L157.7-148.8z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_45_" d="M71.1-97.9c0-2.9-2.4-5.3-5.3-5.3l0,0c-2.9,0-5.3,2.4-5.3,5.3l0,0c0,2.9,2.4,5.3,5.3,5.3l0,0
                  C68.8-92.6,71.1-95,71.1-97.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_46_" d="M27.5-122.3c0-2.9-2.4-5.3-5.3-5.3s-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3l0,0
                  C25.1-117,27.5-119.4,27.5-122.3L27.5-122.3z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_47_" d="M-100.9-196.5c0-2.9-2.4-5.3-5.3-5.3s-5.3,2.4-5.3,5.3l0,0c0,2.9,2.4,5.3,5.3,5.3
                  S-100.9-193.6-100.9-196.5L-100.9-196.5z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_48_" d="M242.7-97.9c0-2.9-2.4-5.3-5.3-5.3l0,0c-2.9,0-5.3,2.4-5.3,5.3l0,0c0,2.9,2.4,5.3,5.3,5.3
                  C240.4-92.6,242.7-95,242.7-97.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_49_" d="M242.7,0.4c0-2.9-2.4-5.3-5.3-5.3l0,0c-2.9,0-5.3,2.4-5.3,5.3l0,0c0,2.9,2.4,5.3,5.3,5.3
                  C240.4,5.7,242.7,3.3,242.7,0.4z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_50_" d="M328.6,0.3c0-2.9-2.4-5.3-5.3-5.3S318-2.6,318,0.3l0,0c0,2.9,2.4,5.3,5.3,5.3
                  C326.3,5.6,328.6,3.2,328.6,0.3L328.6,0.3z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_51_" d="M328.6,148.4c0-2.9-2.4-5.3-5.3-5.3s-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3
                  C326.3,153.6,328.6,151.3,328.6,148.4z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_52_" d="M-100.8,296.1c0-2.9-2.4-5.3-5.3-5.3c-2.9,0-5.3,2.4-5.3,5.3l0,0c0,2.9,2.4,5.3,5.3,5.3
                  C-103.1,301.3-100.8,299-100.8,296.1L-100.8,296.1L-100.8,296.1z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_53_" d="M198.9,222.6c0-2.9-2.4-5.3-5.3-5.3c-2.9,0-5.3,2.4-5.3,5.3l0,0c0,2.9,2.4,5.3,5.3,5.3l0,0
                  C196.5,227.8,198.9,225.5,198.9,222.6z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_54_" d="M199.9,271.6c0-2.9-2.4-5.3-5.3-5.3c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3
                  C197.5,276.9,199.9,274.5,199.9,271.6z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_55_" d="M372,222.6c0-2.9-2.4-5.3-5.3-5.3c-2.9,0-5.3,2.4-5.3,5.3l0,0c0,2.9,2.4,5.3,5.3,5.3
                  C369.7,227.8,372,225.5,372,222.6z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_56_" d="M414.6,295.1c0-2.9-2.4-5.3-5.3-5.3s-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3
                  C412.2,300.3,414.6,298,414.6,295.1L414.6,295.1z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_57_" d="M200-23.9c0-2.9-2.4-5.3-5.3-5.3l0,0c-2.9,0-5.3,2.4-5.3,5.3l0,0c0,2.9,2.4,5.3,5.3,5.3l0,0
                  C197.6-18.6,200-20.9,200-23.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_58_" d="M198.4-73.8c0-2.1-1.6-3.8-3.6-3.8c-2.1,0-3.8,1.6-3.8,3.6c0,0.1,0,0.1,0,0.2
                  c0,2.1,1.8,3.7,3.8,3.6C196.8-70.2,198.4-71.8,198.4-73.8z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_59_" d="M241.7-48.9c0-2.1-1.8-3.7-3.8-3.6c-2,0-3.6,1.6-3.6,3.6c0,2.1,1.6,3.8,3.6,3.8
                  c2.1,0,3.8-1.6,3.8-3.6C241.7-48.8,241.7-48.8,241.7-48.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_60_" d="M370.4-73.3c0-2.1-1.6-3.8-3.6-3.8c-2.1,0-3.8,1.6-3.8,3.6c0,0.1,0,0.1,0,0.2
                  c0,2.1,1.8,3.7,3.8,3.6C368.8-69.7,370.4-71.3,370.4-73.3z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_61_" d="M69.6,0.4c0-2.1-1.6-3.8-3.6-3.8c-2.1,0-3.8,1.6-3.8,3.6c0,0.1,0,0.1,0,0.2
                  c0,2.1,1.7,3.7,3.7,3.7C67.9,4.2,69.6,2.5,69.6,0.4z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_62_" d="M26.3,123.7c0.1-2.1-1.6-3.8-3.6-3.8c-2.1-0.1-3.8,1.6-3.8,3.6c0,0.1,0,0.1,0,0.2
                  c0,2.1,1.7,3.7,3.7,3.7l0,0C24.6,127.5,26.3,125.8,26.3,123.7L26.3,123.7L26.3,123.7z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_63_" d="M69.6,147.8c0-2.1-1.6-3.8-3.6-3.8c-2.1,0-3.8,1.6-3.8,3.6c0,0.1,0,0.1,0,0.2
                  c0,2.1,1.7,3.7,3.7,3.7l0,0C67.9,151.5,69.6,149.9,69.6,147.8L69.6,147.8z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_64_" d="M-16.2,49.8c0-2.1-1.8-3.7-3.8-3.6c-2,0-3.6,1.6-3.6,3.6c0,2.1,1.6,3.8,3.6,3.8
                  c2.1,0,3.8-1.6,3.8-3.6C-16.2,49.9-16.2,49.8-16.2,49.8z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_65_" d="M-59.4-23.9c0-2.1-1.6-3.8-3.6-3.8c-2.1,0-3.8,1.6-3.8,3.6c0,0.1,0,0.1,0,0.2
                  c0,2.1,1.7,3.7,3.7,3.7C-61.1-20.1-59.4-21.8-59.4-23.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_66_" d="M156.2,99.8c0-2.1-1.7-3.7-3.7-3.7l0,0c-2.1,0-3.7,1.7-3.7,3.7l0,0c0,2.1,1.8,3.7,3.8,3.6
                  C154.5,103.4,156.1,101.8,156.2,99.8z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_67_" d="M113.1,222.6c0-2.1-1.7-3.7-3.7-3.7l0,0c-2.1,0-3.7,1.7-3.7,3.7l0,0c0,2.1,1.7,3.7,3.7,3.7
                  C111.5,226.3,113.1,224.6,113.1,222.6z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_68_" d="M113.1,123.7c0-2.1-1.8-3.7-3.8-3.6c-2,0-3.6,1.6-3.6,3.6c0,2.1,1.7,3.7,3.7,3.7l0,0
                  C111.5,127.5,113.1,125.8,113.1,123.7L113.1,123.7z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_69_" d="M198.4,123.3c0-2.1-1.6-3.8-3.6-3.8c-2.1,0-3.8,1.6-3.8,3.6c0,0.1,0,0.1,0,0.2
                  c0,2.1,1.7,3.7,3.7,3.7l0,0C196.8,127.1,198.4,125.4,198.4,123.3C198.4,123.4,198.4,123.4,198.4,123.3z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_70_" d="M157.7-342.7c0-2.9-2.4-5.3-5.3-5.3s-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3
                  S157.7-339.8,157.7-342.7L157.7-342.7z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_71_" d="M77-241.1c0-6.2-5-11.2-11.2-11.2s-11.2,5-11.2,11.2c0,6.2,5,11.2,11.2,11.2
                  S77-234.9,77-241.1z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_72_" d="M118-172.4c0-4.9-3.9-8.8-8.8-8.8s-8.8,3.9-8.8,8.8c0,4.9,3.9,8.8,8.8,8.8
                  C114-163.6,118-167.5,118-172.4L118-172.4z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_73_" d="M202.4-171.7c0-4.9-3.9-8.8-8.8-8.8c-4.9,0-8.8,4-8.8,8.8s3.9,8.8,8.8,8.8
                  C198.5-162.9,202.4-166.8,202.4-171.7z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_74_" d="M118-23.9c0-4.9-3.9-8.8-8.8-8.8s-8.8,3.9-8.8,8.8c0,4.9,3.9,8.8,8.8,8.8
                  C114-15,118-19,118-23.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_75_" d="M289.3-73.1c0-4.9-3.9-8.8-8.8-8.8c-4.9,0-8.8,3.9-8.8,8.8s3.9,8.8,8.8,8.8
                  C285.3-64.3,289.3-68.3,289.3-73.1z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_76_" d="M34.9,24.9c0-6.2-5-11.2-11.2-11.2c-6.2,0-11.2,5-11.2,11.2c0,6.2,5,11.2,11.2,11.2
                  C29.9,36.2,34.9,31.1,34.9,24.9L34.9,24.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_77_" d="M74.7-50.2c0-4.9-3.9-8.8-8.8-8.8s-8.8,3.9-8.8,8.8s3.9,8.8,8.8,8.8S74.7-45.3,74.7-50.2z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_78_" d="M-96.7,198c0-4.9-3.9-8.8-8.8-8.8c-4.9,0-8.8,3.9-8.8,8.8c0,4.9,3.9,8.8,8.8,8.8
                  C-100.7,206.8-96.7,202.9-96.7,198L-96.7,198z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_79_" d="M-54.3,173.2c0-4.9-3.9-8.8-8.8-8.8c-4.9,0-8.8,4-8.8,8.8c0,4.8,3.9,8.8,8.8,8.8
                  C-58.3,182-54.3,178-54.3,173.2z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_80_" d="M-11.2,246.9c0-4.9-3.9-8.8-8.8-8.8c-4.9,0-8.8,3.9-8.8,8.8c0,4.9,3.9,8.8,8.8,8.8
                  C-15.1,255.7-11.1,251.7-11.2,246.9L-11.2,246.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_81_" d="M74.7,98.8c0-4.9-3.9-8.8-8.8-8.8s-8.8,4-8.8,8.8c0,4.9,3.9,8.8,8.8,8.8
                  S74.7,103.7,74.7,98.8z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_82_" d="M161.2,198c0-4.9-3.9-8.8-8.8-8.8s-8.8,3.9-8.8,8.8c0,4.9,3.9,8.8,8.8,8.8
                  S161.2,202.9,161.2,198z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_83_" d="M246.7,198.7c0-4.9-3.9-8.8-8.8-8.8s-8.8,3.9-8.8,8.8c0,4.9,3.9,8.8,8.8,8.8
                  S246.7,203.5,246.7,198.7L246.7,198.7z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_84_" d="M375.5,172.4c0-4.9-3.9-8.8-8.8-8.8c-4.9,0-8.8,4-8.8,8.8c0,4.8,3.9,8.8,8.8,8.8
                  C371.6,181.2,375.5,177.3,375.5,172.4L375.5,172.4z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_85_" d="M331.6,246.9c0-4.9-3.9-8.8-8.8-8.8s-8.8,3.9-8.8,8.8c0,4.9,3.9,8.8,8.8,8.8
                  S331.6,251.7,331.6,246.9L331.6,246.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_86_" d="M118.5,271.8c0-4.9-3.9-8.8-8.8-8.8s-8.8,4-8.8,8.8c0,4.9,3.9,8.8,8.8,8.8
                  S118.5,276.7,118.5,271.8L118.5,271.8z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_87_" d="M162.4,296.1c0-5.8-4.7-10.4-10.4-10.4c-5.8,0-10.4,4.7-10.4,10.4c0,5.8,4.7,10.4,10.4,10.4
                  C157.7,306.5,162.4,301.8,162.4,296.1z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_88_" d="M77-148.4c0-6.2-5-11.2-11.2-11.2s-11.2,5-11.2,11.2s5,11.2,11.2,11.2S77-142.2,77-148.4z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_89_" d="M77,49.8c0-6.2-5-11.2-11.2-11.2s-11.2,5-11.2,11.2S59.6,61,65.8,61S77,56,77,49.8z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_90_" d="M120.3,24.8c0-6.2-5-11.2-11.2-11.2c-6.2,0-11.2,5-11.2,11.2s5,11.2,11.2,11.2
                  C115.3,36,120.3,31,120.3,24.8z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_91_" d="M-8.8-97.9c0-6.2-5-11.2-11.2-11.2s-11.2,5-11.2,11.2s5,11.2,11.2,11.2S-8.8-91.7-8.8-97.9z"
                  />
                <path data-ignore="true" className="st1 circledraw" id="Shape_92_" d="M123.7-73.1c0-8-6.5-14.6-14.5-14.6s-14.5,6.5-14.5,14.6c0,8,6.5,14.6,14.5,14.6
                  C117.2-58.6,123.7-65.1,123.7-73.1L123.7-73.1z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_93_" d="M337.5-98.3c0-8-6.5-14.6-14.5-14.6s-14.5,6.5-14.5,14.6c0,8,6.5,14.6,14.5,14.6
                  S337.5-90.2,337.5-98.3z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_94_" d="M-4.5,0.4c0-8.5-6.9-15.5-15.5-15.5c-8.5,0-15.4,6.9-15.4,15.5c0,8.5,6.9,15.5,15.5,15.5
                  C-11.3,15.9-4.5,9-4.5,0.4L-4.5,0.4z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_95_" d="M167.4,246.9c0-8.5-6.9-15.5-15.5-15.5s-15.5,6.9-15.5,15.5c0,8.5,6.9,15.5,15.5,15.5
                  S167.4,255.4,167.4,246.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_96_" d="M249.4,101.1c0-6.6-5.3-11.9-11.9-11.9c-6.6,0-11.9,5.3-11.9,11.9c0,6.6,5.3,11.9,11.9,11.9
                  C244.1,113,249.4,107.6,249.4,101.1z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_97_" d="M377.1-23.9c0-5.7-4.7-10.4-10.4-10.4c-5.7,0-10.4,4.7-10.4,10.4c0,5.7,4.7,10.4,10.4,10.4
                  C372.5-13.4,377.1-18.1,377.1-23.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_98_" d="M335.3,49.1c0-6.6-5.3-11.9-11.9-11.9c-6.6,0-11.9,5.3-11.9,11.9c0,6.6,5.3,11.9,11.9,11.9
                  C329.9,61,335.3,55.7,335.3,49.1z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_99_" d="M206,173.2c0-6.6-5.3-11.9-11.9-11.9c-6.6,0-11.9,5.3-11.9,11.9c0,6.6,5.3,11.9,11.9,11.9
                  C200.7,185.1,206,179.7,206,173.2z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_100_" d="M-95.4-97.9c0-5.6-4.6-10.2-10.2-10.2c-5.6,0-10.2,4.6-10.2,10.2c0,5.6,4.6,10.2,10.2,10.2
                  C-99.9-87.7-95.4-92.3-95.4-97.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_101_" d="M202.3,24.8c0-4.2-3.4-7.6-7.6-7.6c-4.2,0-7.6,3.4-7.6,7.6s3.4,7.6,7.6,7.6
                  C198.9,32.4,202.3,29,202.3,24.8z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_102_" d="M162.2-48.1c0-5.4-4.4-9.8-9.8-9.8s-9.8,4.4-9.8,9.8s4.4,9.8,9.8,9.8S162.2-42.6,162.2-48.1
                  L162.2-48.1z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_103_" d="M-94.3-48c0-6.2-5-11.2-11.2-11.2s-11.2,5-11.2,11.2c0,6.2,5,11.2,11.2,11.2
                  S-94.3-41.8-94.3-48L-94.3-48z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_104_" d="M291.4,124.3c0-6.2-5-11.2-11.2-11.2c-6.2,0-11.2,5-11.2,11.2s5,11.2,11.2,11.2
                  C286.4,135.5,291.4,130.5,291.4,124.3z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_105_" d="M-51.9,24.9c0-6.2-5-11.2-11.2-11.2c-6.2,0-11.2,5-11.2,11.2c0,6.2,5,11.2,11.2,11.2
                  C-56.9,36.1-51.9,31.1-51.9,24.9z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_106_" d="M34.9-73.3c0-6.2-5-11.2-11.2-11.2c-6.2,0-11.2,5-11.2,11.2c0,6.2,5,11.2,11.2,11.2
                  C29.9-62.1,34.9-67.1,34.9-73.3L34.9-73.3z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_107_" d="M120.3-315.8c0-6.2-5-11.2-11.2-11.2c-6.2,0-11.2,5-11.2,11.2c0,6.2,5,11.2,11.2,11.2
                  C115.3-304.6,120.3-309.6,120.3-315.8z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_108_" d="M204.8-124c0-6.2-5-11.2-11.2-11.2c-6.2,0-11.2,5-11.2,11.2s5,11.2,11.2,11.2
                  C199.8-112.8,204.8-117.8,204.8-124z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_109_" d="M30.6-267.2c0-3.8-3.1-6.9-6.9-6.9c-3.8,0-6.9,3.1-6.9,6.9c0,3.8,3.1,6.9,6.9,6.9
                  C27.5-260.3,30.6-263.4,30.6-267.2L30.6-267.2z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_110_" d="M-56.2-73.3c0-3.8-3.1-6.9-6.9-6.9c-3.8,0-6.9,3.1-6.9,6.9l0,0c0,3.8,3.1,6.9,6.9,6.9
                  C-59.3-66.3-56.2-69.5-56.2-73.3z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_111_" d="M-98.6,0.4c0-3.8-3.1-6.9-6.9-7l0,0c-3.8,0-6.9,3.1-6.9,6.9l0,0c0,3.8,3.1,6.9,6.9,7l0,0
                  C-101.7,7.4-98.6,4.3-98.6,0.4L-98.6,0.4z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_112_" d="M-98.6,98.3c0-3.8-3.1-6.9-6.9-6.9s-6.9,3.1-6.9,7l0,0c0,3.8,3.1,6.9,6.9,6.9
                  C-101.7,105.2-98.6,102.1-98.6,98.3L-98.6,98.3z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_113_" d="M-13,198c0-3.8-3.1-6.9-6.9-7c-3.8,0-6.9,3.1-6.9,6.9l0,0c0,3.8,3.1,6.9,6.9,6.9
                  C-16.1,205-13,201.9-13,198L-13,198L-13,198z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_114_" d="M30.6,74.3c0-3.8-3.1-6.9-6.9-6.9c-3.8,0-6.9,3.1-6.9,7c0,3.8,3.1,6.9,6.9,6.9
                  C27.5,81.3,30.6,78.1,30.6,74.3L30.6,74.3z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_115_" d="M116.6,74.3c0-3.8-3.1-6.9-6.9-6.9c-3.8,0-6.9,3.1-6.9,7l0,0c0,3.8,3.1,6.9,6.9,6.9
                  C113.5,81.3,116.6,78.1,116.6,74.3L116.6,74.3z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_116_" d="M330.3,198c0-3.8-3.1-7-6.9-7c-3.8,0-6.9,3.1-6.9,7l0,0c0,3.8,3.1,6.9,6.9,6.9
                  C327.2,205,330.3,201.9,330.3,198L330.3,198z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_117_" d="M72.6,198c0-3.8-3.1-6.9-6.9-7l0,0c-3.8,0-6.9,3.1-6.9,7l0,0c0,3.8,3.1,6.9,6.9,6.9
                  C69.5,205,72.6,201.9,72.6,198L72.6,198L72.6,198z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_118_" d="M116.4,173.2c0-3.8-3.1-6.9-6.9-7l0,0c-3.8,0-6.9,3.1-6.9,7l0,0c0,3.8,3.1,6.9,6.9,6.9
                  C113.2,180.1,116.4,177,116.4,173.2L116.4,173.2L116.4,173.2z"/>
                <path data-ignore="true" className="st1 circledraw" id="Shape_119_" d="M284.2,75.5c0-2.1-1.7-3.7-3.7-3.7l0,0c-2.1,0-3.7,1.7-3.7,3.7l0,0c0,2.1,1.6,3.8,3.6,3.8
                  c2.1,0,3.8-1.6,3.8-3.6C284.2,75.6,284.2,75.5,284.2,75.5z"/>
              </g>
              <g className="orb writing" transform="translate(251.000000, 756.000000)">
                <path data-ignore="true" id="Shape_120_" className="st2 circle circle" d="M-161.9-309.4c0-21.3-17.3-38.6-38.6-38.6s-38.6,17.3-38.6,38.6c0,21.3,17.3,38.6,38.6,38.6
                  C-179.1-270.8-161.9-288.1-161.9-309.4z"/>
                <g id="icon_x2F_writing" transform="translate(24.000000, 20.572266)" className="st3">
                  <g className="icon">
                    <path data-ignore="true" id="Stroke-1" className="st4" d="M-213.3-326.5v9.6c0,1.3-0.9,2.4-2.1,2.4h-19.5c-1.1,0-2.1-1.1-2.1-2.4v-28.9
                      c0-1.3,0.9-2.4,2.1-2.4h19.5c1.1,0,2.1,1.1,2.1,2.4v7.8"/>
                    <path data-ignore="true" id="Stroke-3" className="st5" d="M-239.2-343.1h4.9"/>
                    <path data-ignore="true" id="Stroke-5" className="st5" d="M-239.2-337.3h4.9"/>
                    <path data-ignore="true" id="Stroke-7" className="st5" d="M-239.2-331.6h4.9"/>
                    <path data-ignore="true" id="Stroke-9" className="st5" d="M-239.2-325.8h4.9"/>
                    <path data-ignore="true" id="Stroke-11" className="st5" d="M-239.2-320h4.9"/>
                    <polygon data-ignore="true" id="Stroke-13" className="st4" points="-216.3,-322.8 -222.6,-318.3 -220.8,-325.9 -210.1,-342 -205.6,-339 					"/>
                    <path data-ignore="true" id="Stroke-15" className="st4" d="M-220.7-325.8c0,0,3.2,0.5,4.3,3.1"/>
                    <path data-ignore="true" id="Stroke-17" className="st4" d="M-210-337.2l-8.1,12.1"/>
                    <path data-ignore="true" id="Stroke-19" className="st4" d="M-211.9-339l4.3,2.9"/>
                    <path data-ignore="true" id="Stroke-21" className="st4" d="M-228.4-341.7h9.1"/>
                    <path data-ignore="true" id="Stroke-23" className="st4" d="M-228.4-335.9h9.1"/>
                    <path data-ignore="true" id="Stroke-25" className="st4" d="M-228.4-329.4h5.8"/>
                  </g>
                </g>
              </g>
              <g className="orb grad" transform="translate(240.000000, 401.000000)">
                <path data-ignore="true" id="Shape_121_" className="st2 circle" d="M-135.4-295.9c0-28.7-23.2-51.9-51.8-51.9s-51.8,23.2-51.8,51.9c0,28.7,23.2,51.9,51.8,51.9
                  S-135.4-267.3-135.4-295.9L-135.4-295.9z"/>
                <g id="icon_x2F_grad-hat" transform="translate(27.000000, 38.000000)" className="st3">
                  <g className="icon">
                    <polygon data-ignore="true" id="Stroke-1_1_" className="st4" points="-216.8,-348.2 -239.2,-341.4 -216.8,-334.6 -194.4,-341.4 					"/>
                    <path data-ignore="true" id="Stroke-3_1_" className="st5" d="M-229.5-338.1v18.6c0,0,12.9-6.8,25.4,0v-18.2"/>
                    <polyline data-ignore="true" id="Stroke-5_1_" className="st5" points="-214.9,-342.7 -196.5,-340 -196.5,-327.7 					"/>
                    <polyline data-ignore="true" id="Stroke-7_1_" className="st4" points="-196,-326.7 -192.7,-325.2 -192.7,-318.5 					"/>
                    <polyline data-ignore="true" id="Stroke-9_1_" className="st4" points="-196.9,-326.7 -200.2,-325.2 -200.2,-318.5 					"/>
                    <path data-ignore="true" id="Stroke-11_1_" className="st4" d="M-197.2-326.1v6.5"/>
                  </g>
                </g>
              </g>
              <g className="orb sci" transform="translate(938.000000, 530.000000)">
                <path data-ignore="true" id="Shape_122_" className="st2 circle" d="M-193.7-325.3c0-12.6-10.2-22.7-22.7-22.7s-22.7,10.2-22.7,22.7s10.2,22.7,22.7,22.7
                  S-193.7-312.7-193.7-325.3L-193.7-325.3z"/>
                <g id="icon_x2F_scope" transform="translate(11.401714, 8.082057)" className="st3">
                  <g className="icon">
                    <path data-ignore="true" id="Stroke-10" className="st5" d="M-225.6-321.4c0,0-1.7-5.8-5.6-7.5"/>
                    <path data-ignore="true" id="Stroke-12" className="st5" d="M-239.2-329h15.9"/>
                    <polygon data-ignore="true" id="Stroke-1_2_" className="st6" points="-220.3,-346.2 -223.8,-348.2 -225.7,-345.4 -222.2,-343.4 					"/>
                    <path data-ignore="true" id="Stroke-3_2_" className="st7" d="M-222-341c0.6-0.9,0.4-2-0.4-2.5l-3.1-1.7c-0.8-0.5-2-0.1-2.6,0.8l-5.8,8.7l6.2,3.4
                      L-222-341z"/>
                    <path data-ignore="true" id="Stroke-5_2_" className="st5" d="M-222.2-339.6c3.3,1.7,5.5,4.8,5.5,8.5c0,5.4-4.8,9.7-10.8,9.7"/>
                    <path data-ignore="true" id="Stroke-7_2_" className="st5" d="M-234.2-321.4h16.4"/>
                  </g>
                </g>
              </g>
              <g className="orb govt" transform="translate(429.000000, 720.000000)">
                <path data-ignore="true" id="Path_81_" className="st2 circle" d="M-185.2-321.2c0-14.9-12.1-27-27-27c-14.9,0-27,12.1-27,27c0,14.9,12.1,27,27,27
                  C-197.3-294.2-185.2-306.3-185.2-321.2L-185.2-321.2z"/>
                <g id="icon_x2F_govt" transform="translate(12.128149, 10.301088)" className="st3">
                  <g className="icon">
                    <polygon data-ignore="true" id="Stroke-1_3_" className="st7" points="-233.6,-323 -230.2,-323 -230.2,-337.6 -233.6,-337.6 				"/>
                    <polygon data-ignore="true" id="Stroke-2" className="st7" points="-225.6,-323 -222.2,-323 -222.2,-337.6 -225.6,-337.6 				"/>
                    <polygon data-ignore="true" id="Stroke-3_3_" className="st7" points="-217.6,-323 -214.1,-323 -214.1,-337.6 -217.6,-337.6 				"/>
                    <path data-ignore="true" id="Stroke-4" className="st4" d="M-236.2-321.1h24.6"/>
                    <path data-ignore="true" id="Stroke-5_3_" className="st4" d="M-239-318.2h30.3"/>
                    <polygon data-ignore="true" id="Stroke-8" className="st4" points="-223.9,-348.2 -239.2,-340.1 -208.5,-340.1 				"/>
                  </g>
                </g>
              </g>
              <g className="orb math" transform="translate(1090.000000, 753.000000)">
                <path data-ignore="true" id="Shape_123_" className="st8 circle" d="M-184.6-320.3c0-14.9-12.1-27-27-27c-14.9,0-27,12.1-27,27c0,14.9,12.1,27,27,27
                  C-196.7-293.3-184.6-305.4-184.6-320.3L-184.6-320.3z"/>
                <g id="icon_x2F_maths" transform="translate(14.000000, 13.980395)" className="st3">
                  <g className="icon">
                    <path data-ignore="true" id="Stroke-1_4_" className="st4" d="M-226.9-323.1c0,1.4-1.1,2.6-2.5,2.6h-7.3c-1.4,0-2.5-1.2-2.5-2.6v-7.5
                      c0-1.4,1.1-2.6,2.5-2.6h7.3c1.4,0,2.5,1.2,2.5,2.6V-323.1z"/>
                    <path data-ignore="true" id="Stroke-3_4_" className="st4" d="M-212.5-323.1c0,1.4-1.1,2.6-2.5,2.6h-7.3c-1.4,0-2.5-1.2-2.5-2.6v-7.5
                      c0-1.4,1.1-2.6,2.5-2.6h7.3c1.4,0,2.5,1.2,2.5,2.6V-323.1z"/>
                    <path data-ignore="true" id="Stroke-5_4_" className="st4" d="M-226.9-337.5c0,1.4-1.1,2.6-2.5,2.6h-7.3c-1.4,0-2.5-1.2-2.5-2.6v-7.5
                      c0-1.4,1.1-2.6,2.5-2.6h7.3c1.4,0,2.5,1.2,2.5,2.6V-337.5z"/>
                    <path data-ignore="true" id="Stroke-7_3_" className="st4" d="M-212.5-337.5c0,1.4-1.1,2.6-2.5,2.6h-7.3c-1.4,0-2.5-1.2-2.5-2.6v-7.5
                      c0-1.4,1.1-2.6,2.5-2.6h7.3c1.4,0,2.5,1.2,2.5,2.6V-337.5z"/>
                    <path data-ignore="true" id="Stroke-9_2_" className="st4" d="M-235.8-341.8h5.5"/>
                    <path data-ignore="true" id="Stroke-11_2_" className="st4" d="M-235.8-325.5h5.5"/>
                    <path data-ignore="true" id="Stroke-13_1_" className="st4" d="M-235.8-328.4h5.5"/>
                    <path data-ignore="true" id="Stroke-15_1_" className="st4" d="M-221.5-341.8h5.8"/>
                    <path data-ignore="true" id="Stroke-17_1_" className="st4" d="M-219.1-344.2v5.9"/>
                    <path data-ignore="true" id="Stroke-19_1_" className="st4" d="M-220.7-328.9l4.1,4.2"/>
                    <path data-ignore="true" id="Stroke-21_1_" className="st4" d="M-216.6-328.9l-4.1,4.2"/>
                  </g>
                </g>
              </g>
              <g className="orb book" transform="translate(1093.000000, 858.000000)">
                <path data-ignore="true" id="Path_82_" className="st8 circle" d="M-157.2-307c0-22.5-18.2-40.8-40.7-40.8s-40.7,18.3-40.7,40.8s18.2,40.8,40.7,40.8
                  S-157.2-284.5-157.2-307z"/>
                <g id="icon_x2F_book-open" transform="translate(20.874997, 24.507976)" className="st3">
                  <g className="icon">
                    <path data-ignore="true" id="Stroke-1_5_" className="st4" d="M-218.9-318.3c-5.4-3.4-11.8-3.4-17.2,0v-27.3c5.4-3.4,11.8-3.4,17.2,0V-318.3z"/>
                    <path data-ignore="true" id="Stroke-3_5_" className="st4" d="M-201.7-318.3c-5.4-3.4-11.8-3.4-17.2,0v-27.3c5.4-3.4,11.8-3.4,17.2,0V-318.3z"/>
                    <polyline data-ignore="true" id="Stroke-5_5_" className="st4" points="-218.9,-312.9 -239.2,-316.5 -239.2,-343 -236.2,-344.1 					"/>
                    <polyline data-ignore="true" id="Stroke-7_4_" className="st4" points="-218.9,-312.9 -198.6,-316.5 -198.6,-343 -201.7,-344.1 					"/>
                    <polyline data-ignore="true" id="Stroke-9_3_" className="st4" points="-232.6,-347.4 -232.6,-332.2 -229.1,-335.2 -225.6,-332.2 -225.6,-348.1 					
                      "/>
                    <path data-ignore="true" id="Stroke-11_3_" className="st4" d="M-214.3-341.6c0,0,3.5-1.7,8.6,0"/>
                    <path data-ignore="true" id="Stroke-13_2_" className="st4" d="M-214.3-336.4c0,0,3.5-1.7,8.6,0"/>
                    <path data-ignore="true" id="Stroke-15_2_" className="st4" d="M-214.3-331.2c0,0,3.5-1.7,8.6,0"/>
                    <path data-ignore="true" id="Stroke-17_2_" className="st4" d="M-214.3-326.1c0,0,3.5-1.7,8.6,0"/>
                  </g>
                </g>
              </g>
              <g className="orb girl" transform="translate(873.000000, 1075.000000)">
                <path data-ignore="true" id="Shape_124_" className="st8 circle" d="M-131.1-293.8c0-29.7-24-53.8-53.7-53.8s-53.7,24.1-53.7,53.8c0,29.7,24,53.8,53.7,53.8
                  C-155.2-240.1-131.1-264.2-131.1-293.8L-131.1-293.8z"/>
                <g id="icon_x2F_girl" transform="translate(36.000000, 30.000000)" className="st3">
                  <g className="icon">
                    <path data-ignore="true" id="Stroke-1_6_" className="st4" d="M-230-335.8h1.6c0.4-0.2,0.7-0.5,1-0.8c0.4-0.5,0.7-1.2,1-1.8c0.2-0.5,0.6-1.2,0.6-1.8
                      c0,0.9,0,1.9,0.1,2.8c0,0.4,0,1.2,0.2,1.6h0.1c0.3-0.9,3.2-6.6,3.5-6.6c0.3,0-0.2,4,0.2,5.1c0.2,0.7,0.7,1,1.4,1.2
                      c0.1-0.2,0.2-0.6,0.4-0.8c0.4-0.4,0.2,0,0.6,0.2c0.3,0.1,0.4-0.1,0.6-0.2c0.4-0.1,0.4,0.2,0.8,0.4c0.8,0.4,4.3,0.6,6.1,0.6
                      L-230-335.8z M-211-334.8c0-0.4,0-0.7-0.1-1.1h0.3c0.4,0.8,0.9,1.6,1,1.8c0.5,1.2,0.5,2.4,0.2,3.7c-0.4,1.6-1.4,3.3-1.2,5
                      c0.4-0.2,0.8-0.2,1.2-0.4c0.8-0.2,1.7-0.6,2.5-0.6c0.7,0,1.5,0.3,2-0.4c0.3-0.5,0.2-1.5,0-1.9c-0.1-0.3-0.3-0.5-0.4-0.8
                      c-0.1-0.3,0-0.5-0.1-0.8c-0.1-1.7-0.5-3.7-1.7-4.8c-0.4-0.4-0.7-0.8-1.2-1.1c-0.5-0.4-1.1-0.6-1.7-1c-0.3-0.2-0.6-0.5-0.8-0.8
                      c-0.8-5.8-5-10.2-10-10.2c-5,0-9.2,4.4-10,10.2c-0.2,0.3-0.5,0.6-0.8,0.8c-0.5,0.4-1.1,0.6-1.7,1c-0.5,0.3-0.8,0.8-1.2,1.1
                      c-1.3,1.1-1.6,3.1-1.7,4.8c0,0.3,0,0.5-0.1,0.8c-0.1,0.3-0.3,0.5-0.4,0.8c-0.2,0.5-0.4,1.5,0,1.9c0.5,0.7,1.3,0.4,2,0.4
                      c0.8,0,1.7,0.4,2.5,0.6c0.4,0.1,0.8,0.2,1.2,0.4c0.2-1.7-0.8-3.4-1.2-5c-0.3-1.3-0.3-2.5,0.2-3.7c0.1-0.3,0.5-0.9,0.9-1.8v0
                      h0.3c0,0.3,0,0.7,0,1c0,6.1,4.5,11,9.9,11C-215.5-323.7-211-328.7-211-334.8z"/>
                    <path data-ignore="true" id="Stroke-3_6_" className="st4" d="M-214.8-322.1l2.4,6.8l-8.6-3.9l-8.6,3.9l2.4-6.8c-7.1,3.1-12.1,10.2-12.1,18.6
                      c0,0.6,0,1.2,0.1,1.8h18.2h18.2c0.1-0.6,0.1-1.2,0.1-1.8C-202.7-311.9-207.7-319-214.8-322.1z"/>
                  </g>
                </g>
              </g>
              <g className="orb tele" transform="translate(813.000000, 987.000000)">
                <path data-ignore="true" id="Shape_125_" className="st8 circle" d="M-174.7-315.4c0-17.8-14.4-32.2-32.2-32.2s-32.2,14.4-32.2,32.2c0,17.8,14.4,32.2,32.2,32.2
                  C-189.2-283.2-174.7-297.6-174.7-315.4L-174.7-315.4z"/>
                <g id="icon_x2F_tele" transform="translate(15.339844, 14.339844)" className="st3">
                  <g className="icon">
                    <path data-ignore="true" id="Stroke-1_7_" className="st7" d="M-233.4-342.3c-0.8,2.9-2.7,5-4.2,4.6c-1.5-0.3-2-2.9-1.2-5.8c0.8-2.9,2.7-5,4.2-4.6
                      C-233.1-347.8-232.6-345.2-233.4-342.3z"/>
                    <path data-ignore="true" id="Stroke-3_7_" className="st7" d="M-224.8-344.9c1.2,0.3,1.6,2.4,1,4.7c-0.7,2.4-2.2,4-3.4,3.8"/>
                    <path data-ignore="true" id="Stroke-5_6_" className="st7" d="M-212-340.8c0.9,0.2,1.2,1.7,0.7,3.4c-0.5,1.7-1.6,2.9-2.5,2.7"/>
                    <path data-ignore="true" id="Stroke-7_5_" className="st7" d="M-237.6-337.7l32.3,4.1l0,0c0.5,0.1,1.2-0.9,1.5-2.1c0.4-1.3,0.3-2.4-0.2-2.5l0,0
                      l-30.6-9.9"/>
                    <polyline data-ignore="true" id="Stroke-9_4_" className="st4" points="-210.5,-314.8 -220.1,-335 -229.7,-314.8 					"/>
                    <path data-ignore="true" id="Stroke-11_4_" className="st4" d="M-220.8-333.6v21"/>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        { device === 'desktop' ? 
          <svg data-aos="illustration-two" data-aos-anchor=".discover-button" data-aos-once id="illustration-two" className="illustration-two" x="0px" y="0px" width="324px" height="476px" viewBox="0 0 324 476" >
            <path className="st9" d="M150.2,392.1l28.4,16.5 M234.5,341.3l27.3,15.8 M193,267.1l24.2,14.2 M59.9,140.8l75.9,44 M101.8,115l78,45.2 M190.9,367.4l22.5,13.1 M61.4,293.4l20.7,11 M189.1,114.3l32.1,18.6 M230.5,88.2l32.5,18.9"/>
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

      </div>
    )
  }
}

export default Illustration;
