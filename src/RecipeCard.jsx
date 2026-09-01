function RecipeCard ( {recipe, onClick}) { 
    return ( 
        <div onClick={onClick}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h2> {recipe.strMeal}</h2>
        </div>
    )
}

export default RecipeCard;