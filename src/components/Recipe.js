import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Detail from "./Detail";

const Recipe = (props) => {
  // let id=props.key;

  return (
    <Router>
      <div>
        <div class="d-flex col-12">
          <div className="col-4">
            <img src={props.image} />
          </div>
          <div className="col-4">
            <h1>{props.title}</h1>
            <h2>Recipies</h2>
            <p>{props.ingredients}</p>
            <h2>HealthLabels</h2>
            <p>{props.healthLabels}</p>
          </div>
          <div className="ml-5 mt-5 pl-5">
            <h1>Calories</h1>
            <p>{props.calories}</p>
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
