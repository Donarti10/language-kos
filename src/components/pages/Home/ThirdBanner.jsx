import React from "react";
import "./styles/thirdbanner.scss";
import Carousel from "react-elastic-carousel";
import { data2 } from "./data2";

const ThirdBanner = () => {
  return (
    <div className="third-banner">
      <div className="inline-banner">
        <h2>LanguageKos academy explained</h2>
        <p>
          The online academy learning method is based on the newest research and
          practical insights. From research we for example know the importance
          of repetition and spaced learning.
        </p>
        <div className="inline-img">
          <div className="img1" />
          <div className="img2" />
          <div className="img3" />
          <div className="img4" />
        </div>
      </div>
      <div className="carousel-banner">
      <div className="carousel-background"></div>
      <div className="background2"></div>
        <Carousel enableAutoPlay autoPlaySpeed={8000}>
          {data2.map((props) => {
            return (
              <div className="inline-item" key={props.id}>
                <div className="inline-third-item">
                  <div className="inline-item-third-banner">
                  <div
                    className="icon-third-banner"
                    style={{ content: `url(${props.icon})` }}
                  ></div>
                  <div className="third-item">
                    <h4>{props.name}</h4>
                    <h6>{props.text}</h6>
                    </div>
                  </div>
                  <div className="quotes" />
                <div>
                  <p>{props.describe}</p>
                  <div className="inline-rating">
                    <div className="star"></div>
                    <span>{props.rating}</span>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ThirdBanner;
