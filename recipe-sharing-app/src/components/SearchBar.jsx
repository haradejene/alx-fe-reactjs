import { useState, useEffect } from 'react'
import useRecipeStore from './recipeStore'

export default function SearchBar() {
  const searchTerm = useRecipeStore((s) => s.searchTerm)
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm)

  // local state + debounce for nicer UX
  const [local, setLocal] = useState(searchTerm)

  useEffect(() => {
    const id = setTimeout(() => setSearchTerm(local), 250) // 250ms debounce
    return () => clearTimeout(id)
  }, [local, setSearchTerm])

  return (
    <input
      type="text"
      value={local}
      onChange={(e) => setLocal(e.target.value)}
      placeholder="Search recipes by name, ingredient or time..."
      style={{ width: '100%', padding: '8px', marginBottom: 12 }}
    />
  )
}
