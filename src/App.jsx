import './App.css'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
