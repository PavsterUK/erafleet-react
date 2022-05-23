import React from 'react';
import DrawerMenuPic from "../../images/homepage/drawer-menu.svg";
import ErafleetTitlePic from "../../images/homepage/Erafleet.svg";
import "../Homepage.css";

const Navbar = () => {
  return (
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
  )
}

export default Navbar