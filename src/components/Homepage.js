import React from "react";
import "./Homepage.css";
import SteeringPic from "../images/homepage/steering.jpg";
import CarsOnMapPic from "../images/homepage/cars-on-map.jpg";
import PhoneInHandPic from "../images/homepage/phone-in-hand.jpg";
import GreenTickPic from "../images/homepage/green-tick.svg";
import SunriseRoadPic from "../images/homepage/sunrise-road.jpg";
import MiniSiteMap from "./Layout/MiniSiteMap";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import PricingInfo from "./PricingInfo";

const homepage = () => {
  return (
    <div id="homepage-container">
      <Header bgImg={SunriseRoadPic}>
        <section id="fleet-features-section">
          <div className="feature-list">
            <h2>Fleet Features</h2>
            <ul>
              <li>
                <img id="green-tick" src={GreenTickPic} />
                <span>GPS Fleet Tracking App and Web Platform</span>
              </li>
              <li>
                <img id="green-tick" src={GreenTickPic} />
                <span>Fleet management</span>
              </li>
              <li>
                <img id="green-tick" src={GreenTickPic} />
                <span>IoT solutions</span>
              </li>
              <li>
                <img id="green-tick" src={GreenTickPic} />
                <span>Plug and play tracking</span>
              </li>
              <li>
                <img id="green-tick" src={GreenTickPic} />
                <span>White label platform</span>
              </li>
            </ul>
          </div>
        </section>
      </Header>
      <section id="iot-solutions-section">
        <div id="iot-solutions-text-wrapper">
          <h3 className="section-title">
            IoT Solutions For Optimised Vehicle Operations
          </h3>
          <span id="iot-solutions-paragraph">
            Individuals and businesses of various sizes operating in logistics,
            insurance, car hire and other transport related sectors can benefit
            from our user-friendly tracking dashboard fed by GPS Tracking
            devices and telematic control units of their choice.
            <br />
            Enhanced vehicle tracking allows reduced operational costs, improved
            business agility, vehicle maintenance and employee safety.
          </span>
        </div>

        <div id="iot-solutions-pics">
          <img id="iot-solutions-pics__cars-on-map" src={CarsOnMapPic} />
          <img id="iot-solutions-pics__steering" src={SteeringPic} />
        </div>
      </section>
      <PricingInfo />

      <section id="purple-bg">
        <h3>
          Accelerate your business through cost-effective automated GPS-powered
          monitoring of every vehicle in your fleet. Make data-driven decisions
          by generating customizable fleet reports and analytics.
        </h3>

        <div className="bullet-points-wrapper">
          <div className="bullet-point">
            <div className="yellow-circle ">
              <h1>1</h1>
            </div>
            <div className="bullet-point-text">
              <h3>Ready to Optimise Your Vehicle Operations?</h3>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </div>
          </div>

          <div className="bullet-point">
            <div className="yellow-circle">
              <h1>2</h1>
            </div>
            <div className="bullet-point-text">
              <h3>Ready to Start Tracking?</h3>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </div>
          </div>

          <div className="bullet-point">
            <div className="yellow-circle">
              <h1>3</h1>
            </div>
            <div className="bullet-point-text">
              <h3>
                Ready to Start Tracking &amp; Optimising Your Vehicle
                Operations?
              </h3>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
            </div>
          </div>
        </div>

        <div id="yelow-bg-rect">
          <img id="phone-in-hand-pic" src={PhoneInHandPic} />
        </div>

        <span className="register-now-paragraph">
          Join our platform today and benefit from 2 months of free service for
          an unlimited number of devices.
        </span>
        <button className="register-now-btn yellow-bg">Register Now</button>
        <span className="register-now-paragraph">
          Connect with us to receive a special offer tailored to your business
          needs.
        </span>
      </section>
      <MiniSiteMap />
      <Footer />
    </div>
  );
};

export default homepage;
