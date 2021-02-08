import React, { Component } from "react";
import logo from "./logo.png";

class TopBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-expand-lg nav">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src={logo} className="logo " />
            </a>
            <div class="" id="navbarSupportedContent">
              <ul class="navbar-nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/">
                    HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    ABOUT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopBar;
