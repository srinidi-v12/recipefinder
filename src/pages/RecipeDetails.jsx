import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setRecipe(data.meals[0]);
    }
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="rounded mb-4" />
      <h2 className="font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc pl-6 mb-4">
        {Array.from({ length: 20 }, (_, i) => i + 1)
          .map((n) => ({
            ingredient: recipe[`strIngredient${n}`],
            measure: recipe[`strMeasure${n}`],
          }))
          .filter((item) => item.ingredient)
          .map((item, index) => (
            <li key={index}>
              {item.ingredient} - {item.measure}
            </li>
          ))}
      </ul>
      <h2 className="font-semibold mb-2">Instructions:</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}
