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

const homepage = () => {
  return (
    <div id="homepage-container">
      <div className="header">
        <div className="navbar">
          <img id="drawer-menu-pic" src={DrawerMenuPic} />
          <img id="erafleet-title-pic" src={ErafleetTitlePic} />
          <button className="start-free-btn">Start Free</button>
        </div>
        <section id="fleet-features">
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
      <section id="iot-solutions">
        <h3 className="section-title">
          IoT Solutions For Optimised Vehicle Operations
        </h3>
        <span>
          Individuals and businesses of various sizes operating in logistics,
          insurance, car hire and other transport related sectors can benefit
          from our user-friendly tracking dashboard fed by GPS tracking devices
          and telematic control units of their choice. <br />
          <br />
          Enhanced vehicle tracking allows reduced operational costs, improved
          business agility, vehicle maintenance and employee safety.
        </span>
        <div id="iot-solutions-pics">
          <img id="iot-solutions-pics__cars-on-map" src={CarsOnMapPic} />
          <img id="iot-solutions-pics__steering" src={SteeringPic} />
        </div>
      </section>
      <section id="flexible-pricing-plan">
        <h3 className="section-title">flexible pricing plan</h3>
        <div className="yellow-rectangle">
          <img src={ShieldPic} />
        </div>
        <span className="grey">Lorem ipsum dolor sit consectetur </span>
        <div className="yellow-rectangle">
          <img src={TrackedCarPic} />
        </div>
        <span className="grey">Lorem ipsum dolor sit consectetur </span>
        <div className="yellow-rectangle">
          <img src={ArrivedAtLocationPic} />
        </div>
        <span className="grey">Lorem ipsum dolor sit consectetur </span>
      </section>
      <section id="per-day-connect">
        <h3 className="section-title">per day connect</h3>
        <span className="grey">
          €0.16 per connected device/1-day from the 3rd month
        </span>
        <br/>
        <span>
          2 months of free service for an unlimited number of devices
          <br/>
          <b>Cancel at Anytime</b>
        </span>
        <button className="register-now-btn">Register Now</button>
      </section>
    </div>
  );
};

export default homepage;
