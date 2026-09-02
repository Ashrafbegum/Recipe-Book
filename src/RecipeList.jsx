import RecipeCard from "./RecipeCard";

function RecipeList ( {recipes, onRecipeSelect}) { 
  
    return (
     <div>
        {recipes.length === 0 ? (
             <p>No recipes found</p>
        ) : (
            recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.idMeal}
                    recipe={recipe}
                    onClick={() => onRecipeSelect(recipe)}
                />
            ))
        )}
     </div>
    );
}

export default RecipeList;