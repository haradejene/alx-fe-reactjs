import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  
  recipes: [
    { id: 1, title: 'Spaghetti Aglio e Olio', description: 'Garlic, olive oil, chili flakes, parsley.' },
    { id: 2, title: 'Simple Pancakes', description: 'Flour, milk, egg — fluffy and quick.' },
  ],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        String(r.id) === String(updatedRecipe.id) ? { ...r, ...updatedRecipe } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => String(r.id) !== String(id)) })),

  setRecipes: (recipes) => set({ recipes }),
}))

export default useRecipeStore