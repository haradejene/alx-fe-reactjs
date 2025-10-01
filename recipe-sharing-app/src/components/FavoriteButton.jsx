import useRecipeStore from './recipeStore'

function FavoriteButton({ recipeId }) {
  const favorites = useRecipeStore((s) => s.favorites)
  const addFavorite = useRecipeStore((s) => s.addFavorite)
  const removeFavorite = useRecipeStore((s) => s.removeFavorite)

  const isFav = favorites.includes(recipeId)

  return (
    <button
      onClick={() => (isFav ? removeFavorite(recipeId) : addFavorite(recipeId))}
      style={{
        marginLeft: 8,
        background: isFav ? 'crimson' : '#eee',
        color: isFav ? '#fff' : '#333',
        padding: '4px 10px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
      }}
    >
      {isFav ? '★ Favorited' : '☆ Favorite'}
    </button>
  )
}

export default FavoriteButton
