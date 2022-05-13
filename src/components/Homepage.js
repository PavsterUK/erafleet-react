import React from "react";
import "./Homepage.css";
import DrawerMenuPic from "../images/homepage/drawer-menu.svg";
import ErafleetTitlePic from "../images/homepage/Erafleet.svg";
import GreenTickPic from "../images/homepage/green-tick.svg";
import SteeringPic from "../images/homepage/steering.jpg";
import CarsOnMapPic from "../images/homepage/cars-on-map.jpg";

const homepage = () => {
  return (
    <div id="homepage-container">
      <div className="header">
        <div className="navbar flex">
          <img id="drawer-menu-pic" src={DrawerMenuPic} />
          <img id="erafleet-title-pic" src={ErafleetTitlePic} />
          <button className="start-free-btn">Start Free</button>
        </div>
        <section id="fleet-features">
          <h2>Fleet Features</h2>
          <div className="feature-list">
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
        <h3>IoT Solutions For Optimised Vehicle Operations</h3>
        <span>
          Individuals and businesses of various sizes operating in logistics,
          insurance, car hire and other transport related sectors can benefit
          from our user-friendly tracking dashboard fed by GPS tracking devices
          and telematic control units of their choice. <br/><br/>Enhanced vehicle tracking
          allows reduced operational costs, improved business agility, vehicle
          maintenance and employee safety.
        </span>
        <div id="iot-solutions-pics">
          <img id="iot-solutions-pics__cars-on-map" src={CarsOnMapPic}/>
          <img id="iot-solutions-pics__steering" src={SteeringPic}/>
        </div>
      </section>
    </div>
  );
};

export default homepage;
