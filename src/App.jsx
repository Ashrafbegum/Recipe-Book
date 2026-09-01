import { useEffect, useState } from "react";
import axios from "axios";
import RecipeList from "./RecipeList";
import RecipeFull from "./RecipeFull";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const getRecipes = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=cookie")
      .then((res) => {
        setRecipes(res.data.meals)})
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const displayRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  }

  const clearSelectedRecipe = () => {
    setSelectedRecipe(null);
  }

  return (
    <div>
      <h1>Recipes</h1>
    
      {selectedRecipe
       ?  
        <RecipeFull selectedRecipe={selectedRecipe} onBack={clearSelectedRecipe}/>
       : 
        <RecipeList 
        recipes={recipes} 
        onRecipeSelect={displayRecipe}/>
      }  
    </div>
  )
}

export default App
