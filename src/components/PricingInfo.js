import React from "react";
import ArrivedAtLocationPic from "../images/homepage/arrived-at-location.png";
import ShieldPic from "../images/homepage/shield.svg";
import TrackedCarPic from "../images/homepage/tracked-car.png";
import ProductCard from "./ProductCard";

const PricingInfo = () => {
  return (
    <>
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
        <ProductCard
          title={"per day connect"}
          price={"€0.16 per connected device/1-day from the 3rd month"}
          paragraph={
            "2 months of free service for an unlimited number of devices"
          }
        />
        <ProductCard
          title={"Monthly Cap"}
          price={"Monthly cap – €4.00 per connected device"}
          paragraph={
            "2 months of free service for an unlimited number of devices"}
        />
      </section>
    </>
  );
};

export default PricingInfo;
