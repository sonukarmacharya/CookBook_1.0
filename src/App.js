import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopBar from "./Bar/TopBar/TopBar";
import Slider from "./Bar/SideBar/Slider";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Aboutus from "./components/Aboutus";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={Aboutus} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
