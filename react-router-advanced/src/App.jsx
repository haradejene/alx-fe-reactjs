import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './components/Profile'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/blog">Blog</Link>
      </nav>

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />

  {/* Protected Profile Route */}
  <Route 
    path="/profile/*" 
    element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    } 
  />

  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:id" element={<BlogPost />} />
</Routes>

    </BrowserRouter>
  )
}

export default App
