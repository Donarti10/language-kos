import React from "react";
import "./blog.scss";
import { blogData } from "./data8";

const LastBanner = () => {
  return (
    <div className="banner-blog">
       <div className="banner-photo-blog">
      <div className="shadow-blog"></div>
      <div className="text-blog">
        <h1>Our Blog</h1>
        <p>
        Read our blog to get new information, facts, and more.
        </p>
      </div>
    </div>
      <div className="first-banner-blog">
      {blogData.map((props) => {
          return (
            <div className="blog-item" key={props.id}>
              <div
                className="image-blogs"
                style={{ content: `url(${props.icon})` }}
              >
              </div>
              <div className="blog-button">
              <button>{props.name}</button>
              </div>
              <p>{props.data}</p>
              <span>{props.paragraf}</span>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default LastBanner;
