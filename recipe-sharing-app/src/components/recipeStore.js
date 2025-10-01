import { create } from 'zustand'

// helper to check if a recipe matches the search term
const matchesSearch = (recipe, term) => {
  const t = String(term || '').trim().toLowerCase()
  if (!t) return true // empty search => match everything

  if ((recipe.title || '').toLowerCase().includes(t)) return true
  if ((recipe.description || '').toLowerCase().includes(t)) return true

  if (Array.isArray(recipe.ingredients) && recipe.ingredients.join(' ').toLowerCase().includes(t))
    return true

  // allow numeric match for prepTime (e.g. "30")
  if (recipe.prepTime != null && String(recipe.prepTime).toLowerCase().includes(t)) return true

  return false
}

const initialRecipes = [
  { id: 1, title: 'Spaghetti Aglio e Olio', description: 'Garlic, olive oil, chili flakes, parsley.', ingredients: ['spaghetti','garlic','olive oil'], prepTime: 20 },
  { id: 2, title: 'Simple Pancakes', description: 'Flour, milk, egg — fluffy and quick.', ingredients: ['flour','milk','egg'], prepTime: 15 },
]

const useRecipeStore = create((set) => ({
  recipes: initialRecipes,
  searchTerm: '',
  filteredRecipes: initialRecipes,

  // set searchTerm and recompute filteredRecipes immediately
  setSearchTerm: (term) =>
    set((state) => {
      const search = term || ''
      const filtered = state.recipes.filter((r) => matchesSearch(r, search))
      return { searchTerm: search, filteredRecipes: filtered }
    }),

  // replace all recipes (keeps search applied)
  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: recipes.filter((r) => matchesSearch(r, state.searchTerm)),
    })),

  addRecipe: (newRecipe) =>
    set((state) => {
      const recipes = [...state.recipes, newRecipe]
      return { recipes, filteredRecipes: recipes.filter((r) => matchesSearch(r, state.searchTerm)) }
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const recipes = state.recipes.map((r) =>
        String(r.id) === String(updatedRecipe.id) ? { ...r, ...updatedRecipe } : r
      )
      return { recipes, filteredRecipes: recipes.filter((r) => matchesSearch(r, state.searchTerm)) }
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const recipes = state.recipes.filter((r) => String(r.id) !== String(id))
      return { recipes, filteredRecipes: recipes.filter((r) => matchesSearch(r, state.searchTerm)) }
    }),
}))

export default useRecipeStore
