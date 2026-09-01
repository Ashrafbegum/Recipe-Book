function RecipeFull ({selectedRecipe, onBack}) {
    let ingredients = [];
    for(let i=1; i<=20; i++) {
        let ingredient = selectedRecipe["strIngredient" + i];
        let measure = selectedRecipe["strMeasure" + i];
        if(ingredient) 
            ingredients.push(<li key={i}>{ingredient} - {measure}</li>);
    }
    
    return(
      <div> 
          <h1>{selectedRecipe.strMeal}</h1> 

          <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} /> 

          <h2>Category: {selectedRecipe.strCategory}</h2>

          <h2>Area: {selectedRecipe.strArea ? selectedRecipe.strArea : "-"  }</h2>

          <h2>Ingredients: </h2>
          <ul>
            {ingredients}
          </ul>

          <h2>Instructions: </h2>
          <p>{selectedRecipe.strInstructions}</p>

          <h2>Video:</h2>
          {selectedRecipe.strYoutube ?
            <a href={selectedRecipe.strYoutube}>Watch Recipe</a> : "No video available"
          }

          <button type="button" onClick={onBack}> Back </button>
        </div>
    )
};

export default RecipeFull;