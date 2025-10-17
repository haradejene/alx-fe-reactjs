import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((err) => console.error("Error fetching recipe:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {recipe.title}
          </h1>

          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                🧂 Ingredients
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>1 cup ingredient A</li>
                <li>2 tbsp ingredient B</li>
                <li>1 tsp ingredient C</li>
              </ul>
            </div>

            <div>
  <h2 className="text-xl font-semibold text-indigo-700 mb-2">👩‍🍳 Instructions</h2>
  <ol className="list-decimal list-inside text-gray-700 space-y-1">
    {recipe.instructions.map((step, index) => (
      <li key={index}>{step}</li>
    ))}
  </ol>
</div>
            </div>  

          <div className="mt-6">
            <Link
              to="/"
              className="inline-block text-indigo-600 font-medium hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
