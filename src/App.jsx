import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";


function App() {
  return (
    <div>
    <Navbar />
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </Router>
    </div>
  )
}

export default App
