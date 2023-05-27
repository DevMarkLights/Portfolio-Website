import {React,useEffect} from 'react'
import '../css/Navbar.css'
import Logo from '../files/LightsLogo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    var arrayNavLinks = ['/home','/about','/resume','/portfolio','/contact']
    var url = window.location.pathname

    useEffect(() =>{
        for(var link of arrayNavLinks){
            if(link === url){
                link = link.replace('/','')
                var el = document.getElementById(link)
                el.style.color = "teal";
            }
            else {
                link = link.replace('/','')
                var el = document.getElementById(link)
                el.style.color = "white";
            }
        }  
    },[])
  return (
    <div className='navbar'>
        <div className='left-side-of-navbar'>
            <img className='logo' src={Logo} alt='logo'/>
            <p>Mark Lights</p>
        </div>
        <div className='right-side-of-navbar'>
            <Link to='/home' style={{textDecoration: 'none'}}>
                <p id='home'>Home</p>
            </Link>
            <Link to='/about' style={{textDecoration: 'none'}}>
                <p id='about'>About</p>
            </Link>
            <Link to='/resume' style={{textDecoration: 'none'}}>
                <p id='resume'>Resume</p>
            </Link>
            <Link to='/portfolio' style={{textDecoration: 'none'}}>
                <p id='portfolio'>Portfolio</p>
            </Link>
            <Link to='/contact' style={{textDecoration: 'none'}}>
                <p id='contact'>Contact Me</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar