import React from 'react'
import EnvelopeTopPic from "../../images/homepage/envelope-top.svg";
import EnvelopeBottomPic from "../../images/homepage/envelope-bottom.svg";
import PhonePic from "../../images/homepage/phone.svg";
import "../Homepage.css";

const MiniSiteMap = () => {
  return (
    <section id="quick-menu">
        <div id="company-summ">
          <h2>Erafleet</h2>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </span>
        </div>
        <div className="mini-nav">
          <h3>Menu</h3>
          <ul className="text-center">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <div id="quick-cont">
          <h3>Quick Contact</h3>
          <span>
            If you have any questions or need help, feel free to contact with
            our team.
          </span>
          <div id="phone">
            <img id="phone-pic" src={PhonePic} />
            <h4>+(44) 123-4567</h4>
          </div>
          <div id="mail">
            <div id="mail-pic">
              <img id="top-env" src={EnvelopeTopPic} />
              <img id="bott-env" src={EnvelopeBottomPic} />
            </div>
            <h4>hello@loopnotluck.com</h4>
          </div>
        </div>
        <div id="address">
          <h3>Address</h3>
          <span>
            63-66 Hatton Garden,
            <br /> 5th Floor Suite 23,
            <br /> London,
            <br /> EC1N 8LE
          </span>
        </div>
      </section>
  )
}

export default MiniSiteMap