import React from 'react'
import '../css/portfolio.css'
import lightsFinaceImg from '../files/Lights_Finance.png'
import rag_ui from '../files/Rag UI.png'
import compressPDF_UI from '../files/compreePDF UI.png'
import ai_researcher_ui from '../files/AI Researcher UI.png'
import ai_code_reviewer_ui from '../files/Ai Code Reviewer UI.png'
import ai_interview_coach_png from '../files/ai interview coach ui.png'
import Project from '../components/project'
const Portfolio = () => {
  return (
    <div className='portfolio-body'>
        <h1>Projects</h1>

        <Project title={'AI Interview Coach'} 
            img={ai_interview_coach_png} 
            description={"I built an AI Interview Coach and it just helped me prep for my own job search.Job hunting is brutal. You find the perfect role, spend hours crafting your resume, and then freeze when the interviewer asks 'tell me about a time when...' So I built something to fix that. This takes any SWE/ML/AI job description and turns it into a personalized mock interview — in seconds."} 
            url={'https://marks-pi.com/ai-interview-coach/'}
            skills={['React.js','LangChain','FastApi','Python','Agentic Models', 'LLM']}
            hosting={['Raspberry Pi','Cloudflare tunneling','nginx']}
        />

        <Project title={'AI Code Reviewer'} 
            img={ai_code_reviewer_ui} 
            description={"I have built a multi-agent AI code reviewer using 4 agents — bug, security, performance, and writer. The bug, security, and performance agents run concurrently using LangGraph's Send API, meaning all three analyze the code simultaneously rather than sequentially. Their findings are then passed to the writer agent which formats everything into a structured review. The backend is built using FastAPI and the frontend is built using React.js. You can submit any public GitHub Pull Request URL and the agents will fetch the diff, analyze the changed code, and automatically post a formatted markdown review comment directly to the PR on GitHub"} 
            url={'https://marks-pi.com/ai-code-reviewer/'}
            skills={['React.js','LangChain','FastApi','Python','Agentic Models', 'LLM']}
            hosting={['Raspberry Pi','Cloudflare tunneling','nginx']}
        />

        <Project title={'AI Researcher'} 
            img={ai_researcher_ui} 
            description={"I have built a multi-agent AI researcher using 3 agents planner, research, and writer agent. They are connected using LangChain planner to researcher to writer. Backend is built using FastApi and Frontend is built using react.js. You can query the AI researcher with any question and it will search the internet and use those findings as context for the writer model. The writer will generate a report for you to read."} 
            url={'https://marks-pi.com/ai-researcher/'}
            skills={['React.js','LangChain','FastApi','Python','Agentic Models', 'LLM']}
            hosting={['Raspberry Pi','Cloudflare tunneling','ngnix']}
        />

        <Project title={'Lights Finance'} 
            img={lightsFinaceImg} 
            description={"Lights Finance is a dividend calculator and finance web application. Shows your sector diversification, calculates your monthly dividend and calculates future value of the portfolio given previous metrics. Incorporates the rate of return for options and unusual activity in the options market. Has a built-in Robinhood report reader that calculates your monthly income from options and dividends."} 
            url={'https://marks-pi.com/finance'}
            skills={['Next.js','MongoDb']}
            hosting={['Raspberry Pi','Cloudflare tunneling','ngnix']}
        />

        <Project title={'Rag Pipeline'} 
            img={rag_ui} 
            description={"Developed a document retrieval and question-answering application that allows users to upload PDF and TXT files and query their contents using semantic search. Implemented a Python/FastAPI backend utilizing the all-MiniLM-L6-v2 embedding model and ChromaDB for vector storage and similarity search. Built a React/Express frontend for user interaction and deployed the system on a self-hosted Raspberry Pi 5 environment."} 
            url={'https://marks-pi.com/rag/'}
            skills={['FastApi','ChromaDB','React.js','Docker','Rag','Linux','Bash']}
            hosting={['Raspberry Pi','Cloudflare tunneling','ngnix']}
        />    

        <Project title={'Compress PDF'} 
            img={compressPDF_UI} 
            description={"For anybody who gets tired of searching for a pdf compressor and you upload your files. Just to find out it requires your email to download it. Or worse you have a set limit on how many you can upload and it charges you a fee. This is for you. It's simple, free, and unlimited. All files uploaded are instantly deleted after being compressed and returned back to you. There is a catch only 1 file at a time."} 
            url={'https://marks-pi.com/compressPDFApp/'}
            skills={['FastApi','React.js','Docker','Linux','Bash']}
            hosting={['Raspberry Pi','Cloudflare tunneling','ngnix']}
        /> 

    </div>
  )
}

export default Portfolio