import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <h1>SAIF</h1>
        <ul className='navbar-items'>
            <li>Questions</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar