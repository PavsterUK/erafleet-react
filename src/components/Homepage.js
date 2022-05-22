import React from "react";
import "./Homepage.css";
import DrawerMenuPic from "../images/homepage/drawer-menu.svg";
import ErafleetTitlePic from "../images/homepage/Erafleet.svg";
import GreenTickPic from "../images/homepage/green-tick.svg";
import SteeringPic from "../images/homepage/steering.jpg";
import CarsOnMapPic from "../images/homepage/cars-on-map.jpg";
import ArrivedAtLocationPic from "../images/homepage/arrived-at-location.png";
import ShieldPic from "../images/homepage/shield.svg";
import TrackedCarPic from "../images/homepage/tracked-car.png";
import PhoneInHandPic from "../images/homepage/phone-in-hand.jpg";
import EnvelopeTopPic from "../images/homepage/envelope-top.svg";
import EnvelopeBottomPic from "../images/homepage/envelope-bottom.svg";
import PhonePic from "../images/homepage/phone.svg";
import CityLeftPic from "../images/homepage/city-left.svg";
import CityRightPic from "../images/homepage/city-right.svg";

const homepage = () => {
  return (
    <div id="homepage-container">
      <div className="header">
        <div className="navbar">
          <img id="drawer-menu-pic" src={DrawerMenuPic} />
          <img id="erafleet-title-pic" src={ErafleetTitlePic} />
          <ul>
            <li>
              <a style={{ color: "#FFD850" }}>Home</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Price</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <div id="sign-in">
            <a>Sign in</a>
            <button className="start-free-btn">Start Free</button>
          </div>
        </div>
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
      </div>
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
      <section id="flexible-pricing-plan-section">
        <h3>flexible pricing plan</h3>
        <div className="yellow-rectangle ">
          <img src={ShieldPic} />
        </div>
        <h4>Lorem ipsum dolor sit consectetur </h4>
        <div className="yellow-rectangle ">
          <img src={TrackedCarPic} />
        </div>
        <h4>Lorem ipsum dolor sit consectetur </h4>
        <div className="yellow-rectangle ">
          <img src={ArrivedAtLocationPic} />
        </div>
        <h4>Lorem ipsum dolor sit consectetur </h4>
      </section>
      <section id="products-cards-section">
        <div className="product-card">
          <h3>per day connect</h3>
          <span className="text-center">
            €0.16 per connected device/1-day from the 3rd month
          </span>

          <span>
            2 months of free service for an unlimited number of devices
            <br />
            <b>Cancel at Anytime</b>
          </span>
          <button className="register-now-btn">Register Now</button>
        </div>

        <div className="product-card">
          <h3>Monthly Cap</h3>
          <span className="text-center">
            Monthly cap – €4.00 per connected device
          </span>
          <span>
            2 months of free service for an unlimited number of devices
            <br />
            <b>Cancel at Anytime</b>
          </span>
          <button className="register-now-btn">Register Now</button>
        </div>
      </section>
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
      <section id="quick-menu">
        <div id="company-summ">
          <h2>Erafleet</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </span>
        </div>
        <div className="mini-nav">
          <h3>Menu</h3>
          <ul className="text-center">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <div id="quick-cont">
          <h3>Quick Contact</h3>
          <span>
            If you have any questions or need help, feel free to contact with
            our team.
          </span>
          <div id="phone">
            <img id="phone-pic" src={PhonePic} />
            <h4>+(44) 123-4567</h4>
          </div>
          <div id="mail">
            <div id="mail-pic">
              <img id="top-env" src={EnvelopeTopPic} />
              <img id="bott-env" src={EnvelopeBottomPic} />
            </div>
            <h4>hello@loopnotluck.com</h4>
          </div>
        </div>
        <div id="address">
          <h3>Address</h3>
          <span>
            63-66 Hatton Garden,
            <br /> 5th Floor Suite 23,
            <br /> London,
            <br /> EC1N 8LE
          </span>
        </div>
      </section>
      <div id="city-silouete-pics">
        <img src={CityLeftPic} />
        <img src={CityRightPic} />
      </div>
      <footer>
        <span>© Erafleet 2022. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default homepage;
