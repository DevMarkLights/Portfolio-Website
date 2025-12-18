import {React,useEffect,useState} from 'react'
import '../css/Navbar.css'
import {Link} from 'react-router-dom'
import Contact from '../pages/contact'
import Sidebar from './sidebar'

const Navbar = () => {
    var arrayNavLinks = ['home','about','resume','portfolio','articles']
    const [contactClicked,setContactClicked] = useState(false)
    const [mediumDevice,setMediumDevice] = useState(false)
    const [sidebarOpened, setSidebarOpened] = useState(false)
    function checkurl(id){
        for(var link of arrayNavLinks){
            if(link === id){
                var el = document.getElementById(link)
                el.style.color = "rgb(10, 156, 156)";
            }
            else {
                var el = document.getElementById(link)
                el.style.color = "rgb(235, 227, 227)";
            }
        }
    }
    
    useEffect(() =>{
        var md
        window.addEventListener('resize', () =>{
            if(window.innerWidth < 600){
              setMediumDevice(true)
              md = true
            }else{
              setMediumDevice(false)
              md = false
            }
          })

        if(!md){
            let url = window.location.pathname
            url = url.replace('/','')
            for(var link of arrayNavLinks){
                if(link === url){
                    var el = document.getElementById(link)
                    el.style.color = "rgb(10, 156, 156)";
                }
                else {
                    var el = document.getElementById(link)
                    el.style.color = "rgb(235, 227, 227)";
                }
            }
        }
    },[])
    
  return (
    <div className='navbar'>
        <div className='left-side-of-navbar'>
              <div className='initial-box'>
                <div>
                    <i className="fa-solid fa-m"></i>
                    <i className="fa-solid fa-a"></i>
                    <i className="fa-solid fa-r"></i>
                    <i className="fa-solid fa-k"></i>
                </div>
                <div>
                    <i className="fa-solid fa-l"></i>
                    <i className="fa-solid fa-i"></i>
                    <i className="fa-solid fa-g"></i>
                    <i className="fa-solid fa-h"></i>
                    <i className="fa-solid fa-t"></i>
                    <i className="fa-solid fa-s"></i>
                </div>
            </div>  
        </div>
        {
            mediumDevice ?
            <>
                {
                    sidebarOpened ?
                    <div>
                        <i className="fa-solid fa-x" onClick={() => {setSidebarOpened(!sidebarOpened)}}></i>
                    </div>
                    :
                    <div>
                        <i className="fa-solid fa-bars" onClick={() => {setSidebarOpened(!sidebarOpened)}}></i>
                    </div>
                }
            </>
            :
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
                <Link to='/articles' style={{textDecoration: 'None'}} onClick={() => {checkurl('articles')}}>
                    <p id='articles'>Articles</p>
                </Link>
                <p id='contact' onClick={() =>{setContactClicked(!contactClicked)}}>Contact Me</p>
                {
                    contactClicked &&
                    <Contact/>
                }
            </div>
        }
        {
            sidebarOpened &&
            <Sidebar array={arrayNavLinks}/>
        }
        
    </div>
  )
}

export default Navbar