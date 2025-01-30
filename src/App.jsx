import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import React, { useRef } from "react";

function App() {
  const footerRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div>
    <Navbar footerRef={footerRef} aboutRef={aboutRef}/>    
    <Router>
    <Routes>
    <Route path="/" element={<Home aboutRef={aboutRef} />} />
    </Routes>
    </Router>
    <Footer ref={footerRef} />    
    </div>
  )
}

export default App
