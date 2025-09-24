import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded mb-2"
      />
      <h2 className="font-bold text-lg">{recipe.strMeal}</h2>
      <Link
        to={`/recipe/${recipe.idMeal}`}
        className="text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
