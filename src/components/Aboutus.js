import React, { Component } from "react";
import logo from "../Bar/TopBar/logo.png";
import Slider from "../Bar/SideBar/Slider";
import TopBar from "../Bar/TopBar/TopBar";
class Aboutus extends Component {
  render() {
    return (
      <>
        <TopBar />
        <Slider />
        <div class="about-us">
          <h1>ABOUT US</h1>
          <div className="about-image">
            <img src={logo} alt="logo"></img>
          </div>
          <p>This is about page</p>
        </div>
      </>
    );
  }
}

export default Aboutus;
