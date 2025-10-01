import { useEffect } from 'react'
import useRecipeStore from './recipeStore'

function RecommendationsList() {
  const recommendations = useRecipeStore((s) => s.recommendations)
  const generateRecommendations = useRecipeStore((s) => s.generateRecommendations)

  // regenerate whenever component mounts or favorites change
  const favorites = useRecipeStore((s) => s.favorites)
  useEffect(() => {
    generateRecommendations()
  }, [favorites, generateRecommendations])

  return (
    <div>
      <h2>✨ Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Add favorites to see suggestions.</p>
      ) : (
        recommendations.map((r) => (
          <div key={r.id} style={{ padding: '6px 0' }}>
            <strong>{r.title}</strong> — {r.description}
          </div>
        ))
      )}
    </div>
  )
}

export default RecommendationsList