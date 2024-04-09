import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo192.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt='' className='logo'/>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Coating Service</li>
          <li>Product</li>
          <li><button className='btn'>Contact us</button></li>

        </ul>
    </nav>
  )
}

export default Navbar
