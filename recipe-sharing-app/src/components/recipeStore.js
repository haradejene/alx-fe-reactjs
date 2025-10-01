import { create } from 'zustand'

// utility for checking if a recipe matches favorites for mock recommendations
const recommendFromFavorites = (recipes, favorites) => {
  if (favorites.length === 0) return []
  // crude demo logic: recommend recipes with similar titles or random pick
  const favTitles = favorites.map((id) => recipes.find((r) => r.id === id)?.title || '')
  const recommended = recipes.filter((r) => {
    const inFavs = favorites.includes(r.id)
    const similar = favTitles.some((t) => t && r.title.toLowerCase().includes(t.split(' ')[0].toLowerCase()))
    return !inFavs && similar
  })
  return recommended.slice(0, 5) // cap at 5
}

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (recipe) =>
    set((state) => {
      const recipes = [...state.recipes, recipe]
      return { recipes }
    }),

  updateRecipe: (updated) =>
    set((state) => {
      const recipes = state.recipes.map((r) =>
        String(r.id) === String(updated.id) ? { ...r, ...updated } : r
      )
      return { recipes }
    }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => String(r.id) !== String(id)),
    })),

  // === FAVORITES ===
  addFavorite: (id) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, id])], // prevent duplicates
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav !== id),
    })),

  // === RECOMMENDATIONS ===
  generateRecommendations: () =>
    set((state) => {
      const recs = recommendFromFavorites(state.recipes, state.favorites)
      return { recommendations: recs }
    }),
}))

export default useRecipeStore
