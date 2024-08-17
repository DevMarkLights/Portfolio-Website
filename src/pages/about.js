import React from 'react'
import profilePic from '../files/profilePic.jpg'
import '../css/about.css'
const About = () => {
  return (
    <div className='about-body'>
        <div className='descrip-pp-container'>
            <div className='description'>
                <h2>I'm a Software Developer</h2>
                <h4>With a Bachelors of Science in Computer Science from Francis Marion <i className="fa fa-university" aria-hidden="true"></i></h4>
                <h4>I am currently getting my Masters in Computer Science with a Concentration in Machine Learning at Georgia Institute of Technology <i className="fa fa-university" aria-hidden="true"></i></h4>
                <h4>My profecient skills in web Development are: <span>Java, React.js, HTML, CSS, Javascript, Node.js, Next.js, Express.js, Spring Boot, Google cloud, MongoDB, SQL, and RESTful APIs </span></h4>
                <h4>My profecient skills in Machine Learning are: <span>python and scikit learn</span></h4>

                <h3>Short Term Goals:</h3>
                <ul>
                    <li>Keep developing my software development skillest in new emerging technologies</li>
                </ul>
                <h3>Long Term Goals:</h3>
                <ul>
                    <li>Find a job as a ML/AI Engineer after getting my masters</li>
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