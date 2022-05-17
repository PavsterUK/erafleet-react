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
    <div id="homepage-container" className="flex-column-center">
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
              <a>Contact us</a>
            </li>
          </ul>
          <div className="flex-row-center">
            <a>Sign in</a>
            <button className="start-free-btn">Start Free</button>
          </div>
        </div>
        <section id="fleet-features" className="flex-column-center">
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
      <section id="iot-solutions" className="flex-column-center text-center">
        <div id="iot-solutions-paragraph">
          <h3 className="section-title text-center">
            IoT Solutions For Optimised Vehicle Operations
          </h3>
          <span id="iot-solutions-paragraph-span">
            Individuals and businesses of various sizes operating in logistics,
            insurance, car hire and other transport related sectors can benefit
            from our user-friendly tracking dashboard fed by GPS tracking
            devices and telematic control units of their choice. <br />
            <br />
            Enhanced vehicle tracking allows reduced operational costs, improved
            business agility, vehicle maintenance and employee safety.
          </span>
        </div>

        <div id="iot-solutions-pics" className="flex-row-center">
          <img id="iot-solutions-pics__cars-on-map" src={CarsOnMapPic} />
          <img id="iot-solutions-pics__steering" src={SteeringPic} />
        </div>
      </section>
      <section
        id="flexible-pricing-plan"
        className="flex-column-center text-center"
      >
        <h3 className="section-title ">flexible pricing plan</h3>
        <div className="yellow-rectangle flex-row-center">
          <img src={ShieldPic} />
        </div>
        <h4 className="h4-grey">Lorem ipsum dolor sit consectetur </h4>
        <div className="yellow-rectangle flex-row-center">
          <img src={TrackedCarPic} />
        </div>
        <h4 className="h4-grey">Lorem ipsum dolor sit consectetur </h4>
        <div className="yellow-rectangle flex-row-center">
          <img src={ArrivedAtLocationPic} />
        </div>
        <h4 className="h4-grey">Lorem ipsum dolor sit consectetur </h4>
      </section>
      <section id="cards">
        <div className="card flex-column-center">
          <h3 className="section-title text-center">per day connect</h3>
          <span className="text-center">
            €0.16 per connected device/1-day from the 3rd month
          </span>
          <br />
          <span className="text-center">
            2 months of free service for an unlimited number of devices
            <br />
            <b>Cancel at Anytime</b>
          </span>
          <button className="register-now-btn flex-row-center">
            Register Now
          </button>
        </div>

        <div className="card flex-column-center">
          <h3 className="section-title text-center">Monthly Cap</h3>
          <span className="text-center">
            Monthly cap – €4.00 per connected device
          </span>
          <br />
          <span className="text-center">
            2 months of free service for an unlimited number of devices
            <br />
            <b>Cancel at Anytime</b>
          </span>
          <button className="register-now-btn">Register Now</button>
        </div>
      </section>
      <section id="purple-bg" className="flex-column-center text-center">
        <h3 className="h3-500 capt">
          Accelerate your business through cost-effective automated GPS-powered
          monitoring of every vehicle in your fleet. Make data-driven decisions
          by generating customizable fleet reports and analytics.
        </h3>
        <div className="flex-column-center">
          <div className="flex-column-center">
            <div className="yellow-circle flex-row-center">
              <h1>1</h1>
            </div>
            <h3 className="section-title-large text-center">
              Ready to Optimise Your Vehicle Operations?
            </h3>
            <h4 className="h4-light-grey seventy-percent-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h4>
          </div>

          <div className="flex-column-center">
            <div className="yellow-circle flex-row-center">
              <h1>2</h1>
            </div>
            <h3 className="section-title-large text-center">
              Ready to Start Tracking?
            </h3>
            <h4 className="h4-light-grey wd-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h4>
          </div>

          <div className="flex-column-center">
            <div className="yellow-circle flex-row-center">
              <h1>3</h1>
            </div>
            <h3 className="section-title-large text-center">
              Ready to Start Tracking &amp; Optimising Your Vehicle Operations?
            </h3>
            <h4 className="h4-light-grey wd-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h4>
          </div>
        </div>

        <div id="yelow-bg-rect">
          <img id="phone-in-hand-pic" src={PhoneInHandPic} />
        </div>
        <span className="capt wd-90">
          Join our platform today and benefit from 2 months of free service for
          an unlimited number of devices.
        </span>
        <button className="register-now-btn yellow-bg flex-row-center">
          Register Now
        </button>
        <span className="wd-90 capt">
          Connect with us to receive a special offer tailored to your business
          needs.
        </span>
      </section>
      <section id="quck-menu" className="flex-colunm-center">
        <div id="erafleet">
          <h2>Erafleet</h2>
          <span className="wd-90 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </span>
        </div>
        <div className="quick-menu">
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
              <a>Contact us</a>
            </li>
          </ul>
        </div>

        <div className="quick-menu">
          <h3>Quick Contact</h3>
          <span className="wd-50 text-center">
            If you have any questions or need help, feel free to contact with
            our team.
          </span>
          <div id="phone">
            <img id="phone-pic" src={PhonePic} />
            <h3>+(44) 123-4567</h3>
          </div>
          <div id="mail">
            <div id="mail-pic">
              <img id="top-env" src={EnvelopeTopPic} />
              <img id="bott-env" src={EnvelopeBottomPic} />
            </div>
            <h3>hello@loopnotluck.com</h3>
          </div>
        </div>
        <div className="quick-menu">
          <h3>Address</h3>
          <span className="wd-50 text-center">
            63-66 Hatton Garden, 5th Floor Suite 23, London,
            <br /> EC1N 8LE
          </span>
        </div>
      </section>
      <div id="city-silouete-pics">
        <img src={CityRightPic} />
        <img src={CityLeftPic} />
      </div>
      <footer className="text-center">
        <span>© Erafleet 2022. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default homepage;
