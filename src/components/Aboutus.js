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
        <div class="main">
          <div>
            <img src={logo} alt="logo" className="logo-about" />
          </div>
          <div>
            <h1 className="text-center col-8 about-text">
              In this site you can search you favourite dishes and find its
              recipies as well as calories it take. This can help to know how
              much calories are we consuming eating those dishes.
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default Aboutus;
