import RecipeCard from "./RecipeCard";
import App from "./App";

const displayRecipe = (recipe) => {
    setSelectedRecipe(recipe);
}

function RecipeList ( {recipes, onRecipeSelect}) { 
    return ( 
        <div>
            {recipes.map((recipe) =>  (
            <RecipeCard 
                key={recipe.idMeal}
                recipe={recipe}
                onClick={() => onRecipeSelect(recipe) }
            />
        ))}
        </div>
    )
}

export default RecipeList;