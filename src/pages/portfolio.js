import React from 'react'
import {Link} from 'react-router-dom'
import '../css/portfolio.css'
import kiroLandingPage from '../files/kiroLandingPage.png'
const Portfolio = () => {
  return (
    <div className='portfolio-body'>
        <h1>Projects</h1>
        <div className='projects-list'>
            <div className='left-side-of-project'>
                <h2>Ecommerce Website</h2>
                <h3>Description:</h3>
                <ul>
                    <li>
                    Ecommerce clothing website using React.js for frontend. Backend: node.js, express.js,
                    and MongoDB. Uses stripe for payment processing. Website has a landing screen, shop
                    page, cart page, and successful order page. Has a Dashboard for the owner of the
                    website to handle orders and inventory.
                    </li>
                </ul>
                <h3>Skills/Technologies used:</h3>
                <ul>
                    <li>Javascript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>express.js</li>
                    <li>MongoDB</li>
                    <li>Hosting:</li>
                    <ul>
                        <li>Google Cloud</li>
                    </ul>
                        <li>Payment Processor</li>
                    <ul>
                        <li>Stripe</li>
                    </ul>
                </ul>
            </div>

            <div className='right-side-of-project'>
                <img className='kiroLandingPage' src={kiroLandingPage} alt='landing page of website'/>
            </div>
        </div>
        
    </div>
  )
}

export default Portfolio