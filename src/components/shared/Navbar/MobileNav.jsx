import React from "react";
import { Link } from "react-router-dom";
import "./mobileNav.scss";
import { CgClose } from "react-icons/cg";

const MobileNav = (props) => {
  return (
    <div className="mobile-nav">
      <div className="sidebar">
        <div className="logo-container">
          <Link to="/" className="sidebar-logo"></Link>
          <button onClick={props.closeSidebar}>
            <CgClose />
          </button>
        </div>
        <div className="sidebar-link">
          <div className="inner-sidebar-link">
            <Link to="/" className="link">
              Home
            </Link>
          </div>
        </div>
        <div className="sidebar-link">
          <div className="inner-sidebar-link">
            <Link to="/" className="link">
              About
            </Link>
          </div>
        </div>
        <div className="sidebar-link">
          <div className="inner-sidebar-link">
            <Link to="/" className="link">
              Courses
            </Link>
          </div>
        </div>
        <div className="sidebar-link">
          <div className="inner-sidebar-link">
            <Link to="/" className="link">
              Teachers
            </Link>
          </div>
        </div>
        <div className="sidebar-link">
          <div className="inner-sidebar-link">
            <Link to="/" className="link">
              Resources
            </Link>
          </div>
        </div>
        <div className="sidebar-link">
          <div className="inner-sidebar-link">
            <Link to="/" className="link">
              Shop
            </Link>
          </div>
        </div>
        <div className="sidebar-link">
          <div className="inner-sidebar-link">
            <Link to="/blog" className="link">
              Blog
            </Link>
          </div>
        </div>
        <div className="sidebar-auth">
          <Link to="/login" className="first-button">
            Log In
          </Link>
          <Link to="/" className="second-button">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="backdrop" onClick={props.closeSidebar}>

      </div>
    </div>
  );
};

export default MobileNav;
