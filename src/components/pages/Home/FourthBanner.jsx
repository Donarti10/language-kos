import React from "react";
import "./styles/fourbanner.scss";
import {AiOutlineArrowRight} from 'react-icons/ai'

const FourthBanner = () => {
  return (
    <div className="banner-four">
      <div className="first-banner-four">
        <div className="photo1" />
        <div className="photo2" />
        <div className="photo3" />
        <div className="photo4" />
        <div className="photo5" />
        <div className="box">
          <div className="inline-item">
            <div className="grm-flag"></div>
            <div className="column-item">
              <h5>Agia Rieger</h5>
              <span>German Language Teacher</span>
            </div>
          </div>
          <p>3 Years In Our Academy</p>
          <div className="inline-button">
          <h4>Learn more</h4>
          <button className="arrow"> <AiOutlineArrowRight/></button>
          </div>
        </div>
      </div>
      <div className="second-banner-four">
        <h2>
          We assist you in obtaining abilities you cannot obtain elsewhere
        </h2>
        <p>
          If you're not absolutely thrilled with your new ability to learn a new
          language and speak it confidently, you may return your course within
          30 days for a full refund.
        </p>
        <button>See all courses</button>
      </div>
    </div>
  );
};

export default FourthBanner;
