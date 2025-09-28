import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes)

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ borderBottom: '1px solid #ddd', padding: '8px 0' }}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
            <DeleteRecipeButton id={recipe.id} />
          </div>
        ))
      )}
    </div>
  )
}



