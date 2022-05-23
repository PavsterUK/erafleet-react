import React from "react";
import Navbar from "./Navbar";
import "../Homepage.css";

const Header = (props) => {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${props.bgImg})`}}
    >
      <Navbar />
      {props.children}
    </div>
  );
};

export default Header;
