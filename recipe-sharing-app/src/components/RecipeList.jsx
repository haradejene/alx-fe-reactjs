import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.filteredRecipes) // <- show filtered results

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes match your search. Try another term.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ borderBottom: '1px solid #ddd', padding: '8px 0' }}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <small>
              {recipe.prepTime ? `Prep: ${recipe.prepTime} min` : null}
            </small>
            <div style={{ marginTop: 8 }}>
              <Link to={`/recipes/${recipe.id}/edit`} style={{ marginRight: 8 }}>Edit</Link>
              <DeleteRecipeButton id={recipe.id} />
            </div>
          </div>
        ))
      )}
    </div>
  )
}
