import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Detail from "./Detail";

const Recipe = props => {
  // let id=props.key;

  return (
    <Router>
      <div class="trending">
        <div class="card">
          <Link to={"/detail"}>
            <img src={props.image} />
          </Link>
          <div class="card-text">
            <h3>{props.title}</h3>
            <h3>{props.key}</h3>
            <button>{props.yield}</button>
          </div>
        </div>
      </div>

      <Route exact path="/detail:{props.key}" component={Detail} />
    </Router>
  );
};

export default Recipe;

{
  /*<ol>*/
}
{
  /*    {props.ingredients.map(ingredient =>(*/
}
{
  /*        <li>{ingredient.text}</li>*/
}
{
  /*    ))}*/
}
{
  /*</ol>*/
}
{
  /*<p>Calories:{props.calories}</p>*/
}
