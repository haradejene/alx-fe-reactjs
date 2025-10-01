import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', gap: 40, padding: 20 }}>
        <div style={{ flex: 2 }}>
          <h1>🍲 Recipe Sharing App</h1>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar />
                  <AddRecipeForm />
                  <RecipeList />
                </>
              }
            />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
          </Routes>
        </div>
        <div style={{ flex: 1 }}>
          <FavoritesList />
          <RecommendationsList />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
