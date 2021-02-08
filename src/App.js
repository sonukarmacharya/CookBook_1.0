import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Trending from "./components/Trending";
import routes from "./AppRoutes";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import TopBar from "./Bar/TopBar/TopBar";
import Aboutus from "./components/Aboutus";
import Slider from "./Bar/SideBar/Slider";

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Slider />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/about" component={Aboutus} />
          <Route exact path="/detail" component={Detail} />          
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
{
  /*<Switch>*/
}
{
  /*    {routes.map((route,key)=>*/
}
{
  /*        <Route path={route.path} component={route.component} exact={route.exact}/>*/
}
{
  /*    )}*/
}
{
  /*</Switch>*/
}
