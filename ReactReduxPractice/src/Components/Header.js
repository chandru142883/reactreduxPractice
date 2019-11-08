import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
        <li><Link to='/LogIn'>LogIn</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
