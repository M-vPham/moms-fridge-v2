import React from "react";
import Image from "next/image";

interface Recipe {
  recipeTitle: string;
  recipeDescription: String;
  recipeCatagory: String;
}

const RecipeCard = ({
  recipeTitle,
  recipeDescription,
  recipeCatagory,
}: Recipe) => {
  return (
    <div className="card card-compact w-60 bg-base-100 shadow-xl">
      <figure>
        <img src="/static/images/bun-bo-hue.jpg" alt="Shoes" />
      </figure>
      <div className="card-body bg-slate-800">
        <h2 className="card-title">{recipeTitle}</h2>

        <p className="">{recipeDescription}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-neutral">{recipeCatagory}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
