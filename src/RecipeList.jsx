import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, onRecipeSelect }) {

  return (
    <div>

      {recipes.length === 0 ? (

        <p className="text-center text-gray-500 text-lg py-10">
          No recipes found
        </p>

      ) : (

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        ">

          {recipes.map((recipe) => (

            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onClick={() => onRecipeSelect(recipe)}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default RecipeList;