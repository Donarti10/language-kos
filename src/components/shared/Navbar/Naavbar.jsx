import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import MobileNav from "./MobileNav";

const Naavbar = () => {
  const [showSidebar,setShowSidebar] = useState(false)
  return (
    <nav>
      <Link to="/" className="nav-logo"></Link>

      <div className="nav-links">
        <div className="nav-link">
          <Link to="/" className="inner-nav-link home-link">
            Home
          </Link>
          <Link to="/" className="inner-nav-link about-link">
            About
            <MdKeyboardArrowDown />
          </Link>
          <Link to="/" className="inner-nav-link courses-link">
            Courses
            <MdKeyboardArrowDown />
          </Link>
          <Link to="/" className="inner-nav-link teachers-link">
            Teachers
            <MdKeyboardArrowDown />
          </Link>
          <Link to="/" className="inner-nav-link resources-link">
            Resources
            <MdKeyboardArrowDown />
          </Link>
          <Link to="/" className="inner-nav-link shop-link">
            Shop
            <MdKeyboardArrowDown />
          </Link>
          <Link to="/blog" className="inner-nav-link blog-link">
            Blog
          </Link>
        </div>
      </div>

      <div className="nav-auth">
        <div className="nav-icon">
          <BiSearch />
          <AiOutlineHeart />
          <AiOutlineShoppingCart />
        </div>
        <Link to="/login" className="first-button">
          Log In
        </Link>
        <Link to="/" className="second-button">
          Sign Up
        </Link>
      </div>
     {showSidebar ? <MobileNav closeSidebar={() => setShowSidebar(false) } /> : null}
      <button className="menu-button" onClick={() =>setShowSidebar(true)}><AiOutlineMenu />
      </button>
    </nav>
  );
};

export default Naavbar;
