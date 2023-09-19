import React from "react";
import "../Footer/footer2.scss";
import { footer } from "../Footer/footerdata";
import { Link } from "react-router-dom";
import ModeSwitch from "./ModeSwitch";
import {BsMoon,BsSun} from 'react-icons/bs'

const Footer2 = () => {
  return (
    <footer>
      <div className="links">
        {footer.map((props) => {
          return (
            <div className="category" key={props.id}>
              <h6>{props.title}</h6>
              <ul>
                {props.links.map((li) => {
                  return <Link to={li.to}>{li.link}</Link>;
                })}
              </ul>
            </div>
          );
        })}
        <div className="languagekos-footer">
          <Link to="/" className="image-footer"></Link>
          <p>
            We succeeded in developing the most comprehensive language courses,
            allowing our students to study effectively.
          </p>
          <div className="footer-image-side">
            <div className="icn1"></div>
            <div className="icn2"></div>
            <div className="icn3"></div>
            <div className="icn4"></div>
          </div>
          <div className="app-footer">
            <div className="google"></div>
            <div className="app-store"></div>
          </div>
        </div>
      </div>
      <div className="footer2">
        <div className="last-row">
          <p>Outkos 2022 © All rights reserved.</p>

        </div>

        <div className="prefered-theme">
          <p>Terms</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
        </div>
        <div className="inline-images-footer">
          <BsMoon className="moon" />
          <ModeSwitch />
          <BsSun className="sun" />
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
