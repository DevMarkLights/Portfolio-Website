import React from 'react'
import profilePic from '../files/profilePic.jpg'
import '../css/about.css'
const About = () => {
  return (
    <div className='about-body'>
        <div className='descrip-pp-container'>
            <div className='description'>
                <h2>I'm a Software Engineer</h2>
                <h4>Software Engineer with 4 years of enterprise experience at General Motors, currently completing an M.S. in Computer Science (Machine Learning) at Georgia Institute of Technology. Builds and deploys production AI systems including multi-agent LLM pipelines, RAG applications, and fine-tuned language models. Strong foundation in full-stack engineering (Java, Python, React, Spring Boot) combined with hands-on AI/ML development. All AI projects are live and self-hosted.
                </h4>
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