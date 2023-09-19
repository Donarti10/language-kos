import React from "react";
import "../Footer/footer.scss";
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="banner-eight">
      <div className="shadow-footer"></div>
      <div className="text-eight">
        <h1>Subscribe to our newsletter</h1>
        <p>
          Get our latest offer, news and articles first hand right in your inbox
        </p>

        <div className="text-footer">
          <span><AiOutlineMail />Write Email Here</span>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
