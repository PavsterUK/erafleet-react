import React from "react";
import "./Features.css";
import Header from "./Layout/Header";
import CityRoadTimelapsePic from "../images/features/city-road-timelapse.jpg";
import AnalyticsPic from "../images/features/analytics.svg";
import LocationsPic from "../images/features/locations-connected.svg";
import LadyWithPhonePic from "../images/features/lady-holds-phone.png";
import "./Features.css";
import CircleWithNumber from "./GUI/CircleWithNumber";

const Features = () => {
  return (
    <div className="features-container">
      <Header bgImg={CityRoadTimelapsePic}>
        <section id="features-header-title">
          <h1>Intelligent Features of EraFleet dashboard</h1>
          <span>
            Registered users get instant access to the user-friendly,
            easy-to-use tracking dashboard featuring real-time monitoring,
            custom reports and analytics, points of interests and e-garage
            functions. The dashboard reflects every vehicle attributed to the
            registered company or individual.
          </span>
        </section>
      </Header>

      <section id="rt-monitoring">
        <h2>Real-time monitoring</h2>
        <span>
          Integrated GPS-powered maps display accurate real-time information for
          a set of vehicles or a specific vehicle in your fleet.
          <br />
          <br /> With EraFleet you can make quick and informed decisions by
          gaining access to such data as: <br />
          <br />
          <ul>
            <li>
              Vehicle’s location, including routes travelled during a particular
              period of time which allows you to follow your drivers’ progress
              and adherence to the planned route.
            </li>
            <li>
              Current speed, average speed, speed limits in selected areas and
              where those limits were exceeded by your drivers will help you to
              enforce compliant driver behaviour on the road which may impact
              your company’s reputation and expenditure. These data (including
              data and time) can be displayed for any point of the travelled
              route.
            </li>
            <li>
              Downtime duration and location will enable you to evaluate and
              optimise your planned routes and schedules which will lead to
              increased productivity, improved service and reduced fuel costs.
            </li>
          </ul>
        </span>
        <img src={AnalyticsPic} />
      </section>
      <section id="our-feature">
        <h3>Our feature</h3>
        <h2>Reports and analytics</h2>
        <span>
          Having easy access to summarised vehicle performance data can
          significantly improve essential measurement of operational processes,
          and thus positively impact business growth. EraFleet reports are
          customisable, instantly convertible into charts and integrative of
          different vehicles. The database stores your data for up to a year
          which allows you to run reports comprising both live and historical
          data for any selected time range, number of units and various report
          types. Your selected information is immediately displayed in
          digestible charts and graphs which can be analysed from different
          angles. You can go granular as much as you want as historical data can
          be sorted by any desired time range – from an annual view to a
          specific day. Data obtained from different devices can be easily
          consolidated into one report.
        </span>
        <img src={LadyWithPhonePic} />
      </section>
      <section id="poi">
        <h2>Points of interests</h2>
        <span>
          Identifying and defining the most relevant or regularly visited areas
          on the map can increase business efficiency, including customer
          satisfaction. You can create a number of editable Points of Interests
          (POI) representing such operative zones as frequently visited pick up
          and delivery locations, garages and petrol stations.
        </span>
        <h2>EraFleet POI tab features</h2>
        <div className="poi-feature">
          <CircleWithNumber num={1} color={"#F9F9F9"} bgColor={"#3734A9"} />
          <span>
            Basic area information – title, description and coordinates.
          </span>
        </div>

        <div className="poi-feature">
          <CircleWithNumber num={2} color={"#F9F9F9"} bgColor={"#3734A9"} />
          <span>
            A side tab displaying movement of a selected vehicle to and from the
            POI.
          </span>
        </div>

        <div className="poi-feature">
          <CircleWithNumber num={3} color={"#F9F9F9"} bgColor={"#3734A9"} />
          <span>
            Events tab showing a list of existing events which you can edit,
            delete or complement with new ones.
          </span>
        </div>

        <div className="poi-feature">
          <CircleWithNumber num={4} color={"#F9F9F9"} bgColor={"#3734A9"} />
          <span>
            The trigger of email notifications informing about vehicles entering
            and leaving the POI
          </span>
        </div>

        <img src={LocationsPic}/>
      </section>
    </div>
  );
};

export default Features;
