import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import logo1 from '../images/logo1.jpg';
import iconc from '../images/iconc.png';
//import Skill from './Skills/Skill';
const Navbar = () => {
  return ( 
  <nav className="navbar">
    <img  src={logo1} alt='logo' className='i1' ></img>
     <div className="menu">
      <Link className='menuitem' to='/'>Home</Link>
      <Link className='menuitem' to='/about'>About</Link>
      <Link className='menuitem' to='/skill'> Skills</Link>
      <Link className='menuitem' to='/projects'>Projects</Link>
     </div>
     <Link className='contactlink' to='/contact'><button className="menubtn">
      <img src={iconc} alt="icon" className='icon'></img>
      Contact me</button></Link>
  </nav>
  

  )
}

export default Navbar