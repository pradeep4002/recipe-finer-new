import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-2/5 rounded-md my-4 float-right" />
      <h2 className="text-4xl font-bold mb-6">{recipe.strMeal}</h2>
      <h3 className="text-xl font-semibold">Ingredients:</h3>
      <ul className="list-disc ml-5">
        {Array.from({ length: 20 }).map((_, i) => {
          const ingredient = recipe[`strIngredient${i + 1}`];
          const measure = recipe[`strMeasure${i + 1}`];
          return ingredient ? <li key={i}>{measure} {ingredient}</li> : null;
        })}
      </ul>

      <h3 className="text-xl font-semibold mt-4">Instructions:</h3>
      <p className="whitespace-pre-line">{recipe.strInstructions}</p>

      <a href={recipe.strSource} target="_blank" rel="noopener noreferrer" className="block mt-4 text-blue-500 underline">
        View Full Recipe
      </a>
    </div>
  );
};

export default RecipeDetails;
