import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../Assets/KMCLogoTray.png'
import menuIcon from '../../Assets/menuIcon.png'
import {Button} from 'react-scroll'
const Navbar = () => {
  
  const [menu,setMenu] = useState("home");
  const [sticky, setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ?setSticky(true):setSticky(false);
    })
  },[]);

  const[mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)

  }

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
      <img src={logo} alt='' className='logo'/>
        <ul className={mobileMenu?'' :'hide-mobile-menu'}>
          <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none',color: 'white'}}to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("aboutUs")}}><Link style={{textDecoration: 'none',color: 'white'}} to='/aboutUs'>About us</Link>{menu==="aboutUs"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Services")}}><Link style={{textDecoration: 'none',color: 'white'}} to='/Services'>Services</Link>{menu==="Services"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Products")}}><Link style={{textDecoration: 'none',color: 'white'}} to='/Products'>Products</Link>{menu==="Products"?<hr/>:<></>}</li>
          <li><Button to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Button></li>

        </ul>
        <img src={menuIcon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
