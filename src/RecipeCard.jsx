function RecipeCard({ recipe, onClick }) {

  return (
    <div
      onClick={onClick}
      className="
        bg-white
        rounded-xl
        overflow-hidden
        shadow-md
        cursor-pointer
        transition
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
      "
    >

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="
          w-full
          h-52
          object-cover
          transition
          duration-300
          hover:scale-105
        "
      />

      <div className="p-4">

        <h2 className="
          text-lg
          font-semibold
          text-gray-800
          line-clamp-2
        ">
          {recipe.strMeal}
        </h2>

      </div>

    </div>
  );
}

export default RecipeCard;