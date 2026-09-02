import { useEffect, useState } from "react";
import axios from "axios";

import RecipeList from "./RecipeList";
import RecipeFull from "./RecipeFull";
import Search from "./Search";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const initialUrl =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=cookie";

  const [url, setUrl] = useState(initialUrl);

  const getRecipes = () => {
    setLoading(true);

    axios
      .get(url)
      .then((res) => {
        setRecipes(res.data.meals || []);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getRecipes();
  }, [url]);

  const searchRecipes = (search) => {
     if (search.trim() === "") {
        setMessage("Please enter a recipe to search");

        setRecipes([]);
      return;
    }

    setMessage("");

    const searchUrl =
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.trim()}`;

    setUrl(searchUrl);
  };

  const displayRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const clearSelectedRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      <h1>Recipes</h1>

      <Search onSearch={searchRecipes} />

      {message && <p>{message}</p>}

      {loading && <p>Loading...</p>}

      {!loading && !message && (
          selectedRecipe ? (
            <RecipeFull
              selectedRecipe={selectedRecipe}
              onBack={clearSelectedRecipe}
            />
          ) : (
            <RecipeList
              recipes={recipes}
              onRecipeSelect={displayRecipe}
            />
          )
      )}  
    </div>
  );
}

export default App;