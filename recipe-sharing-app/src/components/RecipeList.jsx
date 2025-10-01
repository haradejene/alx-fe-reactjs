import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'
import FavoriteButton from './FavoriteButton'

function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes)

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #ddd', padding: '8px 0' }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <div style={{ marginTop: 6 }}>
            <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
            <DeleteRecipeButton id={recipe.id} />
            <FavoriteButton recipeId={recipe.id} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecipeList