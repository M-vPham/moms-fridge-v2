import React from "react";
import { Recipe } from "../../app/interfaces/type";

const RecipeCard = ({
  recipeTitle,
  recipeImageSrc,
  recipeDescription,
  recipeCategory,
}: Recipe) => {
  return (
    <div className="card card-compact w-60 bg-base-100 shadow-xl">
      <figure>
        <img
          src={(recipeImageSrc = "/static/images/bun-bo-hue.jpg")}
          alt={recipeTitle}
        />
      </figure>
      <div className="card-body bg-slate-800">
        <h2 className="card-title">{recipeTitle}</h2>

        <p className="">{recipeDescription}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-neutral">{recipeCategory}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
