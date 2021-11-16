import React from "react";
import "./Navbar.scss";

import { Person, Mail } from "@material-ui/icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/intro" className="logo">
            aryabhat Online.
          </a>
          <div className="itemContainer">
            <Person className="icon"></Person>
            <span>+91 7410 147 125</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"></Mail>
            <span>sushant.pru@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
            <span className="line4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
