import React from "react";
import "./Homepage.css";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <h3>{props.title}</h3>
      <span>
        {props.price}
      </span>

      <span>
        {props.paragraph}
        <br/>
        <br/>
        <b>Cancel at Anytime</b>
      </span>
      <button className="register-now-btn">Register Now</button>
    </div>
  );
};

export default ProductCard;
