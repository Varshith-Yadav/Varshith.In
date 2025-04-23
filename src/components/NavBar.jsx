import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import '../navbar.css'

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <nav className="navbar">
      <h2 className="logo">MVY</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar


