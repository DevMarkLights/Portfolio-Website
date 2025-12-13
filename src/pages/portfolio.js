import React from 'react'

import '../css/portfolio.css'
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
                    Light Finance is a dividend calculator and finance web application. Shows your sector diversification, 
                    calculates your monthly dividend and calculates future value of the portfolio given previous metrics. 
                    Incorporates the rate of return for options and unusual activity in the options market. 
                    Has a built-in Robinhood report reader that calculates your monthly income from options and dividends.
                    </li>
                </ul>
                <h3>Skills/Technologies used:</h3>
                <ul>
                    <li>Next.js</li>
                    <li>MongoDB</li>
                    <li>Hosting:</li>
                    <ul>
                        <li>Raspberry Pi</li>
                        <li>Cloudflare tunneling</li>
                    </ul>
                </ul>
            </div>

            <div className='right-side-of-project'>
                <img className='lightsFinanceLandingPage' src={lightsFinaceImg} alt='landing page of website' onClick={() => {window.location.href = 'https://marks-pi.com/finance'}}/>
            </div>
        </div>
        
    </div>
  )
}

export default Portfolio