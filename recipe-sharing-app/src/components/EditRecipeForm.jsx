import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'

export default function EditRecipeForm() {
  const { id } = useParams()
  const recipe = useRecipeStore((s) => s.recipes.find((r) => String(r.id) === String(id)))
  const updateRecipe = useRecipeStore((s) => s.updateRecipe)
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title)
      setDescription(recipe.description)
    }
  }, [recipe])

  if (!recipe) return <div>Recipe not found.</div>

 const handleSubmit = (event) => {
  event.preventDefault(); 
  updateRecipe({ id: recipe.id, title: title.trim(), description: description.trim() })
  navigate(`/recipes/${recipe.id}`)
}


  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate(-1)} style={{ marginLeft: 8 }}>
        Cancel
      </button>
    </form>
  )
}
