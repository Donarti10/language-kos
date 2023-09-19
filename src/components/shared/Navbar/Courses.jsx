import React from "react";
import "../Navbar/aboutmenu.scss";
import { Link } from "react-router-dom";
import { servicesData } from "./nav-data";

const AboutMenu = () => {
  return <div className='nav-megamenu products-megamenu'>
  {servicesData.map((props) => {
      return(
          <Link 
              key={props.id}
              to={props.path} 
              className='menu-link'
          >
              <div className="icon1">{props.icon}</div>
              <div className='link-text'>
                  <p>{props.text}</p>
              </div>
          </Link>
      )
  })}
</div>
};

export default AboutMenu;
