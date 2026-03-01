import React from 'react'
import '../css/portfolio.css'
import lightsFinaceImg from '../files/Lights_Finance.png'
import rag_ui from '../files/Rag UI.png'
import compressPDF_UI from '../files/compreePDF UI.png'
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

        <div className='projects-list'>
            <div className='left-side-of-project'>
                <h2>Rag Pipeline</h2>
                <h3>Description:</h3>
                <ul>
                    <li>
                        Developed a document retrieval and question-answering application that allows
                        users to upload PDF and TXT files and query their contents using semantic
                        search. Implemented a Python/FastAPI backend utilizing the all-MiniLM-L6-v2
                        embedding model and ChromaDB for vector storage and similarity search. Built a
                        React/Express frontend for user interaction and deployed the system on a
                        self-hosted Raspberry Pi 5 environment.
                    </li>
                </ul>
                <h3>Skills/Technologies used:</h3>
                <ul>
                    <li>FastAPI</li>
                    <li>ChromaDB</li>
                    <li>Docker</li>
                    <li>Rag (Retrieval-Augmented Generation)</li>
                    <li>Linux</li>
                    <li>Bash</li>
                    <li>Hosting:</li>
                    <ul>
                        <li>Raspberry Pi</li>
                        <li>Cloudflare tunneling</li>
                    </ul>
                </ul>
            </div>

            <div className='right-side-of-project'>
                <img className='lightsFinanceLandingPage' src={rag_ui} alt='landing page of website' onClick={() => {window.location.href = 'https://marks-pi.com/rag/'}}/>
            </div>
        </div>      

        <div className='projects-list'>
            <div className='left-side-of-project'>
                <h2>Compress PDF</h2>
                <h3>Description:</h3>
                <ul>
                    <li>
                        For anybody who gets tired of searching for a pdf compressor and you upload
                        your files. Just to find out it requires your email to download it. Or worse you
                        have a set limit on how many you can upload and it charges you a fee. This is for
                        you. It's simple, free, and unlimited. All files uploaded are instantly
                        deleted after being compressed and returned back to you. There is a catch only 1
                        file at a time.
                    </li>
                </ul>
                <h3>Skills/Technologies used:</h3>
                <ul>
                    <li>FastAPI</li>
                    <li>React.js</li>
                    <li>Linux</li>
                    <li>Bash</li>
                    <li>python</li>
                    <li>Hosting:</li>
                    <ul>
                        <li>Raspberry Pi</li>
                        <li>Cloudflare tunneling</li>
                    </ul>
                </ul>
            </div>

            <div className='right-side-of-project'>
                <img className='lightsFinanceLandingPage' src={compressPDF_UI} alt='landing page of website' onClick={() => {window.location.href = 'https://marks-pi.com/compressPDFApp/'}}/>
            </div>
        </div>    
    </div>
  )
}

export default Portfolio