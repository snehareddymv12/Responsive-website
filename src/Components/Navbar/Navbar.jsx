import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';
const Navbar = () => {
  const [dark,setDark]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setDark(true) : setDark(false);
    })
  },[])

    const [hide,setHide]=useState(false);
    const toggleMenu=()=>{
      hide?setHide(false):setHide(true);
    }


  return (
    <>
    <nav className={`container ${dark ? "dark-nav" : ""}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={hide?'':"hide-menu"}>
            <li><Link to='hero'  smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program'  smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about'  smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus'  smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials'  smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link className='btn' to='contact'  smooth={true} offset={-260} duration={500}>Contact us</Link></li>
        </ul>
         <img src={menu_icon} alt="" className='menu-icon'  onClick={toggleMenu}/>
    </nav>
    </>
  )
}

export default Navbar