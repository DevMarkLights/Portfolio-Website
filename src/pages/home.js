import React from 'react'
import profilePic from '../files/profilePic.jpg'
import '../css/home.css'
import appleBitmoji from '../files/apple_bitmoji.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='homePage'>
        <div className='introduction'>
            <div className='description'>
                <h1>Hi, I am <span>Mark Lights</span></h1>
                <h3>I'm a full stack software engineer</h3>
                <h5>Skilled in Java, CSS, M.E.R.N. Stack, and SQL and currently employed at General Motors</h5>
                <Link to={'/about'} style={{textDecoration: 'none'}}>
                    <button className='learn-more'>Learn More</button>
                </Link>
            </div>
            <div>
                <img id='profilePic' src={appleBitmoji}></img>
                <div className='logo-links'>
                    <Link to={'https://github.com/DevMarkLights'}><i id='github-link' className="fa-brands fa-github"></i></Link>
                    <Link to={'https://www.linkedin.com/in/mark-lights-1141811bb'}><i id='linkedin-link' className="fa-brands fa-linkedin"></i></Link>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Home