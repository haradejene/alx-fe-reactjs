import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <h1>🍲 Recipe Sharing App</h1>

        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />

          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />

          {/* optional: fallback route */}
          <Route path="*" element={<div>Page not found. <a href="/">Home</a></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
