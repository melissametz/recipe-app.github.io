import React, { useState } from "react";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import "./App.css";

function App() {

  const [recipes, setRecipes] = useState(RecipeData);


  const addRecipe = (newRecipe) => {
    setRecipes([ ...recipes, newRecipe ]);
  };

  function deleteRecipe(recipeIndex) {
    setRecipes(recipes.filter((recipe, index) => index !== recipeIndex));
  };


  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;