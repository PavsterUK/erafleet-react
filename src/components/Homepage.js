import React from "react";
import "./Homepage.css";
import DrawerMenuPic from "../images/homepage/drawer-menu.svg";

const homepage = () => {
  return (
    <div className="header">
      <div className="navbar flex">
        <img src={DrawerMenuPic} />
        <h1>Erafleet</h1>
        <button className="start-free-btn">Start Free</button>
      </div>
    </div>
  );
};

export default homepage;
