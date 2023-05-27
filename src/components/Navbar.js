import React from 'react'
import '../css/Navbar.css'
import Logo from '../files/LightsLogo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-side-of-navbar'>
            <img className='logo' src={Logo} alt='logo'/>
            <p>Mark Lights</p>
        </div>
        <div className='right-side-of-navbar'>
            <Link to='/home' style={{textDecoration: 'none'}}>
                <p>Home</p>
            </Link>
            <Link to='/about' style={{textDecoration: 'none'}}>
                <p>About</p>
            </Link>
            <Link to='/resume' style={{textDecoration: 'none'}}>
                <p>Resume</p>
            </Link>
            <Link to='/portfolio' style={{textDecoration: 'none'}}>
                <p>Portfolio</p>
            </Link>
            <Link to='/contact' style={{textDecoration: 'none'}}>
                <p>Contact Me</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar