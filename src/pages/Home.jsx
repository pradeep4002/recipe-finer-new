import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [error, setError] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    const fetchRandomMeals = async () => {
      try {
        let meals = [];
        for (let i = 0; i < 10; i++) {
          const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
          meals.push(response.data.meals[0]);
        }
        setRandomRecipes(meals);
      } catch (error) {
        console.error("Error fetching random recipes", error);
      }
    };

    fetchRandomMeals();
  }, []);

  const searchRecipes = async () => {
    if (!ingredient.trim()) {
      setError("Please enter an ingredient!");
      return;
    }

    try {
      setError("");
      setSearchPerformed(true);
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.trim()}`);

      if (!response.data.meals) {
        setError("No recipes found for this ingredient.");
        setRecipes([]);
        return;
      }

      setRecipes(response.data.meals);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setError("Failed to fetch recipes. Try again later.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchRecipes();
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center items-center">
        <h2 className="text-5xl font-bold mb-4">Find a Recipe</h2>
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            className="bg-white border p-2 flex-grow rounded"
            placeholder="Enter an ingredient..."
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={searchRecipes}
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>

      {!searchPerformed && (
        <div className="mt-6">
          <h3 className="text-3xl font-semibold mb-2">Random Recipes</h3>
          <div className="grid grid-cols-5 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {randomRecipes.map((recipe) => (
              <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`} className="border p-2 rounded flex flex-col items-center">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded-md" />
                <p className="font-medium mt-2">{recipe.strMeal}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {searchPerformed && recipes.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Search Results</h3>
          <div className="grid grid-cols-5 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {recipes.map((recipe) => (
              <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`} className="border p-2 rounded flex flex-col items-center">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded-md" />
                <p className="font-medium">{recipe.strMeal}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
