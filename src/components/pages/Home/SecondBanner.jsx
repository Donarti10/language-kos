import React from "react";
import { dataDomain } from "./data";
import "./styles/secondbanner.scss";
import Carousel from "react-elastic-carousel";

const breakpoints = [
  {
    width: 1,
    itemsToShow: 1,
  },
  {
    width: 300,
    itemsToShow: 2,
  },
  {
    width: 500,
    itemsToShow: 3,
  },
  {
    width: 900,
    itemsToShow: 4,
  },
];

const SecondBanner = () => {
  return (
    <div className="our-team">
      <h3>Advantages of being our student</h3>
      <Carousel breakPoints={breakpoints}>
        {dataDomain.map((props) => {
          return (
            <div className="slider-item" key={props.id}>
              <div
                className="icon-banner"
                style={{ content: `url(${props.icon})` }}
              ></div>
              <h4>{props.name}</h4>
              <p className="email">{props.email}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SecondBanner;
