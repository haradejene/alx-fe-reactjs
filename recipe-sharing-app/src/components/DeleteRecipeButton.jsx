import { useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'

export default function DeleteRecipeButton({ id, afterDeletePath = '/' }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
  const navigate = useNavigate()

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(id)
      navigate(afterDeletePath)
    }
  }

  return <button onClick={handleDelete}>Delete</button>
}
