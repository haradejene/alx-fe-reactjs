import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Please enter at least two ingredients separated by commas";
    if (!instructions.trim()) newErrors.instructions = "Instructions are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Here you could send the data to your backend or state
    console.log({
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      instructions,
    });

    // Clear the form after submission
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.title ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-300"
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Ingredients (comma separated)</label>
          <textarea
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.ingredients ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-300"
            }`}
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
          <textarea
            className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.instructions ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-indigo-300"
            }`}
            rows="5"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors w-full sm:w-auto"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
