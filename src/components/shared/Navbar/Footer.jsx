import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="banner-eight">
      <div className="shadow-footer"></div>
      <div className="text-eight">
        <h1>Subscribe to our newsletter</h1>
        <p>
          Get our latest offer, news and articles first hand right in your inbox
        </p>
      </div>
      <div className="text-footer">
        <div className="border">
          <span>Write Email Here</span>
          <div className="button-footer">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
