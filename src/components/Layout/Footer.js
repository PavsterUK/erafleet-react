import React from "react";
import CityLeftPic from "../../images/homepage/city-left.svg";
import CityRightPic from "../../images/homepage/city-right.svg";
import "../Homepage.css";

const Footer = () => {
  return (
    <>
      <div id="city-silouete-pics">
        <img src={CityLeftPic} />
        <img src={CityRightPic} />
      </div>
      <footer>
        <span>© Erafleet 2022. All rights reserved.</span>
      </footer>
    </>
  );
};

export default Footer;
