import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
