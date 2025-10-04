import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <Router>
      <div className="h-screen w-screen bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
