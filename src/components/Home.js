import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import TopBar from "../Bar/TopBar/TopBar";

const Home = () => {
  const APP_ID = "5ee9d0c2";
  const APP_KEYS = "d8b82ede97e7f70d81538a066fa001e4";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSerch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div>
      <TopBar />
      <div className="main">
      <form onSubmit={getSearch} className="search-form  p-3">
        <input
          className="search-box"
          type="text"
          value={search}
          onChange={updateSerch}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="body d-flex flex-wrap mt-3">
      {recipes.map(recipe => (
        <div className="p-3">

          <Recipe
            yield={recipe.recipe.yield}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
            healthLabels={recipe.recipe.healthLabels}
          />
          </div>
      ))}
      
      </div>
      
      </div>
    </div>
  );
};
export default Home;
