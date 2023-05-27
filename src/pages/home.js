import React from 'react'
import profilePic from '../files/profilePic.jpg'
import '../css/home.css'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className='homePage'>
        <Navbar/>
        <div className='Header'>
            <p>Hi, I am <span>Mark Lights</span></p>
            <p>I'm a Software Engineer currently employed at General Motors</p>
        </div>
        <div>
            <img id='profilePic' src={profilePic}></img>
        </div>
    </div>
  )
}

export default Home