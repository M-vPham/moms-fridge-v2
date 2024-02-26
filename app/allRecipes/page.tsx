import React from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";

const AllRecipes = () => {
  return (
    <div>
      <p> The page that shows all the recipes.</p>
      <RecipeCard
        recipeTitle="Recipe Title"
        recipeDescription="Recipe Description"
        recipeCatagory="Category"
      />
    </div>
  );
};

export default AllRecipes;
