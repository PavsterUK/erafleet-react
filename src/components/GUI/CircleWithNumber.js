import React from "react";

import "./CircleWithNumber.css";

const CircleWithNumber = (props) => {
  return (
    <div id="circle" style={{ backgroundColor: props.bgColor }}>
      <h1 style={{ color: props.color }}>{props.num}</h1>
    </div>
  );
};

export default CircleWithNumber;
