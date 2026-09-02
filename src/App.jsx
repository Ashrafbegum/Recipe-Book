import { useEffect, useState, useCallback } from "react";
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
        setMessage("Something went wrong. Please try again.");
        setRecipes([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getRecipes();
  }, [url]);

  const searchRecipes = useCallback((search) => {

    if (search.trim() === "") {
      setMessage("");
      setRecipes([]);
      return;
    }

    setMessage("");

    const searchUrl =
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.trim()}`;

    setUrl(searchUrl);

  }, []);

  const displayRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const clearSelectedRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-orange-500 text-white py-8 shadow-md">
        <div className="max-w-6xl mx-auto px-4">

          <h1 className="text-4xl font-bold text-center mb-2">
            Recipe Book
          </h1>

          <p className="text-center text-orange-100">
            Find delicious recipes for your next meal
          </p>

        </div>
      </header>


      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-10">

        <Search onSearch={searchRecipes} />


        {/* Message */}
        {message && (
          <p className="text-center text-red-500 font-medium mb-6">
            {message}
          </p>
        )}


        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center py-10">
            <p className="text-gray-600 text-lg">
              Loading recipes...
            </p>
          </div>
        )}


        {/* Recipes / Full recipe */}
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

      </main>

    </div>
  );
}

export default App;
