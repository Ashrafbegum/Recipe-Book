import { useEffect, useState } from "react";
import axios from "axios";
import RecipeList from "./RecipeList";

function App() {
  const [recipes, setRecipes] = useState([]);

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

  return (
    <div>
      <h1>Recipes</h1>
      <RecipeList recipes={recipes}/>
    </div>
  )
}

export default App
