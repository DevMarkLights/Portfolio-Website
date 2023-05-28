import {React,useEffect,useState} from 'react'
import '../css/Navbar.css'
import Logo from '../files/LightsLogo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    var arrayNavLinks = ['home','about','resume','portfolio','contact']
    

    function checkurl(id){
        for(var link of arrayNavLinks){
            if(link === id){
                var el = document.getElementById(link)
                el.style.color = "teal";
            }
            else {
                var el = document.getElementById(link)
                el.style.color = "white";
            }
        }
        
    }
    
  return (
    <div className='navbar'>
        <div className='left-side-of-navbar'>
            <img className='logo' src={Logo} alt='logo'/> 
        </div>
        <div className='right-side-of-navbar'>
            <Link to='/home' style={{textDecoration: 'none'}} onClick={() => {checkurl('home')}}>
                <p id='home'>Home</p>
            </Link>
            <Link to='/about' style={{textDecoration: 'none'}} onClick={() => {checkurl('about')}}>
                <p id='about'>About</p>
            </Link>
            <Link to='/resume' style={{textDecoration: 'none'}} onClick={() => {checkurl('resume')}}>
                <p id='resume'>Resume</p>
            </Link>
            <Link to='/portfolio' style={{textDecoration: 'none'}} onClick={() => {checkurl('portfolio')}}>
                <p id='portfolio'>Portfolio</p>
            </Link>
            <Link to='/contact' style={{textDecoration: 'none'}} onClick={() => {checkurl('contact')}}>
                <p id='contact'>Contact Me</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar