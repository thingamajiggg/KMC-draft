import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../Assets/logo192.png'
import menuIcon from '../../Assets/menuIcon.png'
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
          <li onClick={()=>{setMenu("coatingServices")}}><Link style={{textDecoration: 'none',color: 'white'}} to='/coatingServices'>Services</Link>{menu==="coatingServices"?<hr/>:<></>}</li>
          <li>Product</li>
          <li><button className='btn'>Contact us</button></li>

        </ul>
        <img src={menuIcon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
