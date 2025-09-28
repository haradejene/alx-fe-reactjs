import { Link, useParams } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

export default function RecipeDetails() {
  const { id } = useParams()
  const recipe = useRecipeStore((s) => s.recipes.find((r) => String(r.id) === String(id)))

  if (!recipe) return <div>Recipe not found. <Link to="/">Back</Link></div>

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p>
        <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
        <DeleteRecipeButton id={recipe.id} afterDeletePath="/" />
      </p>
      <p><Link to="/">← Back to list</Link></p>
    </div>
  )
}
