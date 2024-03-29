export interface Recipe {
    key: string;
    recipeTitle: string;
    recipeImageSrc?: string;
    recipeDescription: String;
    recipeCategory: String;
  }

export interface MyContext{
    token?: String;
  }