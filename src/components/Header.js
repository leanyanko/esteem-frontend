import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 id="sitetitle">
          <span>ESSTEEM JOB REFERRAL CONTESTS</span>
        </h1>

        <span class="menu">
          <div />

          <button className="btn">ABOUT</button>
          <button className="btn">POST JOB</button>
          <button className="btn">LOGIN</button>
        </span>
      </div>
    );
  }
}

export default Header;
