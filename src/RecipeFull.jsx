function RecipeFull({ selectedRecipe, onBack }) {

  let ingredients = [];

  for (let i = 1; i <= 20; i++) {

    let ingredient = selectedRecipe["strIngredient" + i];
    let measure = selectedRecipe["strMeasure" + i];

    if (ingredient) {
      ingredients.push(
        <li
          key={i}
          className="
            bg-gray-50
            px-4 py-3
            rounded-lg
            border
            border-gray-200
          "
        >
          <span className="font-medium text-gray-800">
            {ingredient}
          </span>

          {measure && (
            <span className="text-gray-500 ml-2">
              - {measure}
            </span>
          )}
        </li>
      );
    }
  }

  return (
    <div className="max-w-4xl mx-auto">

      {/* Back button */}
      <button
        type="button"
        onClick={onBack}
        className="
          mb-6
          px-5 py-2
          bg-gray-800
          text-white
          rounded-lg
          font-medium
          hover:bg-gray-700
          transition
          duration-200
        "
      >
        ← Back
      </button>


      {/* Recipe card */}
      <article className="
        bg-white
        rounded-2xl
        shadow-lg
        overflow-hidden
      ">

        {/* Recipe image */}
        <img
          src={selectedRecipe.strMealThumb}
          alt={selectedRecipe.strMeal}
          className="
            w-full
            h-72
            md:h-96
            object-cover
          "
        />


        <div className="p-6 md:p-8">

          {/* Title */}
          <h1 className="
            text-3xl
            md:text-4xl
            font-bold
            text-gray-800
            mb-6
          ">
            {selectedRecipe.strMeal}
          </h1>


          {/* Category and Area */}
          <div className="
            flex
            flex-wrap
            gap-3
            mb-8
          ">

            <span className="
              px-4 py-2
              bg-orange-100
              text-orange-700
              rounded-full
              font-medium
            ">
              Category: {selectedRecipe.strCategory}
            </span>

            <span className="
              px-4 py-2
              bg-gray-100
              text-gray-700
              rounded-full
              font-medium
            ">
              Area: {selectedRecipe.strArea || "-"}
            </span>

          </div>


          {/* Ingredients */}
          <section className="mb-8">

            <h2 className="
              text-2xl
              font-bold
              text-gray-800
              mb-4
            ">
              Ingredients
            </h2>

            <ul className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-3
            ">
              {ingredients}
            </ul>

          </section>


          {/* Instructions */}
          <section className="mb-8">

            <h2 className="
              text-2xl
              font-bold
              text-gray-800
              mb-4
            ">
              Instructions
            </h2>

            <p className="
              text-gray-600
              leading-7
              whitespace-pre-line
            ">
              {selectedRecipe.strInstructions}
            </p>

          </section>


          {/* Video */}
          <section>

            <h2 className="
              text-2xl
              font-bold
              text-gray-800
              mb-4
            ">
              Video
            </h2>

            {selectedRecipe.strYoutube ? (

              <a
                href={selectedRecipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  px-5 py-3
                  bg-red-500
                  text-white
                  font-semibold
                  rounded-lg
                  hover:bg-red-600
                  transition
                  duration-200
                "
              >
                ▶ Watch Recipe
              </a>

            ) : (

              <p className="text-gray-500">
                No video available
              </p>

            )}

          </section>

        </div>

      </article>

    </div>
  );
}

export default RecipeFull;