import React from 'react'

import '../css/portfolio.css'
import kiroLandingPage from '../files/kiroLandingPage.png'
import lightsFinaceImg from '../files/Lights_Finance.png'
const Portfolio = () => {
  return (
    <div className='portfolio-body'>
        <h1>Projects</h1>
        <div className='projects-list'>
            <div className='left-side-of-project'>
                <h2>Lights Finance</h2>
                <h3>Description:</h3>
                <ul>
                    <li>
                    Lights Finance is a dividend calculator web application. Shows your sector diversification, 
                    calculates your monthly dividend and Calculates future value of the portfolio given previous metrics.
                    </li>
                </ul>
                <h3>Skills/Technologies used:</h3>
                <ul>
                    <li>Next.js</li>
                    <li>MongoDB</li>
                    <li>Hosting:</li>
                    <ul>
                        <li>Google Cloud</li>
                    </ul>
                </ul>
            </div>

            <div className='right-side-of-project'>
                <img className='lightsFinanceLandingPage' src={lightsFinaceImg} alt='landing page of website' onClick={() => {window.location.href = 'https://lightsfinanceimage-gfcq4f6cla-ue.a.run.app/'}}/>
            </div>
        </div>
        
    </div>
  )
}

export default Portfolio