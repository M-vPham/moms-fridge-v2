export async function getAllRecipes() {
    const recipeData = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
    if (!recipeData.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data.");
      console.log(recipeData.status);
    }
    const recipeJSON = await recipeData.json()
    return recipeJSON
  }