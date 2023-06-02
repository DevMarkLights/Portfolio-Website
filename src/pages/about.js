import React from 'react'
import profilePic from '../files/profilePic.jpg'
import '../css/about.css'
const About = () => {
  return (
    <div className='about-body'>
        <div className='descrip-pp-container'>
            <div className='description'>
                <h2>I'm a Software Developer</h2>
                <h4>with a Bachelors of Science in Computer Science from Francis Marion <i class="fa fa-university" aria-hidden="true"></i></h4>
                <h4>My profecient skills are: <span >Java, React.js, HTML, CSS, Javascript, Node.js, Express.js, Spring Boot, Google cloud, MongoDB, SQL, and RESTful APIs </span></h4>
                <h3>Short Term Goals:</h3>
                <ul>
                    <li>Keep developing my software development skillest in new emerging technologies</li>
                </ul>
                <h3>Long Term Goals:</h3>
                <ul>
                    <li>Go back to college and get my Masters in Computer Science with a Concentration in AI/Machine Learning</li>
                </ul>
            </div>
            <div className='profile-pic-about-container'>
                <img className='profile-pic-about' src={profilePic}></img>
            </div>
        </div>
    </div>
  )
}

export default About