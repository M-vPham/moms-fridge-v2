import React, { useState } from "react";

import { Recipe } from "../interfaces/type";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { getAllRecipes } from "../api/recipeApi";
import FilterBar from "@/components/FilterBar/FilterBar";

const AllRecipes = async () => {
  const recipes = await getAllRecipes();
  return (
    <div>
      <FilterBar />
      <p> The page that shows all the recipes.</p>
      {recipes.map((recipe: any) => (
        <RecipeCard
          key={recipe.key}
          recipeTitle={recipe.title}
          recipeDescription={recipe.body}
          recipeCategory={recipe.brand}
        />
      ))}
    </div>
  );
};

export default AllRecipes;
