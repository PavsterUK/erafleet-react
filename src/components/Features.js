import React from 'react';
import "./Features.css";
import Header from './Layout/Header';
import CityRoadTimelapsePic from "../images/features/city-road-timelapse.jpg";

const Features = () => {
  return (
    <div className="features-container">
      <Header bgImg={CityRoadTimelapsePic}>
      </Header>
    </div>
  )
}

export default Features