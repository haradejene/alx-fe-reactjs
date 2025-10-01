import useRecipeStore from './recipeStore'

export default function FavoritesList() {
  const favorites = useRecipeStore((s) => s.favorites) || [] // ✅ fallback

  if (favorites.length === 0) {
    return <div><h2>Favorites</h2><p>No favorites yet</p></div>
  }

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((r) => (
          <li key={r.id}>{r.title}</li>
        ))}
      </ul>
    </div>
  )
}
