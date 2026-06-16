import React from 'react'
import { Link } from 'react-router-dom'
import '../css/resume_2.css'
import WorkExperience from '../components/workExperience'
import Projects from '../components/projects'
import Skills from '../components/skills'
import resume from '../files/Mark_Lights_Resume.pdf'

var GM_Job = [
  'Led production deployments across 4 enterprise applications, coordinating with QA, DevOps, and business stakeholders to deliver releases with minimal downtime in high-availability environments ',
  'Developed and maintained REST APIs in Spring Boot with OAuth2 authentication, integrating internal microservices and downstream systems supporting business-critical workflows',
  'Designed Spring Batch interfaces to optimize high-volume data processing, improving throughput and concurrency across batch jobs',
  'Migrated enterprise application (IVH) from Spring Boot to Quarkus, containerizing services with Docker to enable cloud-native deployment on Kubernetes and reduce pod startup time and memory overhead',
  'Built and tuned complex SQL queries, stored procedures, and triggers, improving query performance and ensuring data integrity across transaction-heavy workflows',
  'Managed P1/P2 production incident queue, performing root cause analysis and implementing long-term fixes to reduce repeat incidents and improve SLA compliance',
  'Delivered full-stack enhancements using Spring Boot and JSP, improving user-facing workflows across business-critical systems',
  'Documented production deployment and rollback procedures to support release coordination and reduce recovery time']

const Resume = () => {
  return (
    <div className='resumePage'>
      <div style={{textAlign:'center'}}>
        <a
          href={resume}
          rel="noopener noreferrer"
          style={{ display: "block", marginBottom: "8px", textDecoration: "none", color: 'white' }}
          >
          Click Here For PDF version ▹ RESUME
        </a>
      </div>
      {/* HEADER */}
      <div className='resume-header'>
        <div className='resume-header-info'>
          <h1>Hi, I am <span>Mark Lights</span></h1>
          <h3>Full-Stack Software Engineer <span style={{color:'#0A9C9C'}}>·</span> AI/ML Engineer <span style={{color:'#0A9C9C'}}>·</span> Java, Python, React, Spring Boot, APIs <span style={{color:'#0A9C9C'}}>·</span> ML Systems, RAG Pipelines </h3>
        </div>
        <div className='resume-header-links'>
          <Link to='https://github.com/DevMarkLights' className='hlink'>
            <i className='fa-brands fa-github'></i> DevMarkLights
          </Link>
          <Link to='https://www.linkedin.com/in/mark-lights-1141811bb' className='hlink'>
            <i className='fa-brands fa-linkedin'></i> LinkedIn
          </Link>
          <Link to='https://marks-pi.com' className='hlink'>
            <i className='fa-solid fa-globe'></i> marks-pi.com
          </Link>
        </div>
      </div>

      {/* <div className='resume-divider'></div> */}

      {/* MAIN GRID */}
      <div className='resume-grid'>

        {/* LEFT / MAIN COLUMN */}
        <div className='main-col'>

          {/* WORK EXPERIENCE */}
          <div className='section'>
            <p className='section-title'>work experience</p>
            <WorkExperience 
              jobTitle={'Software Engineer'} 
              dates={'2022 — 2026'} 
              companyName={'General Motors'} 
              location={'Roswell, GA'}
              roleDescription={GM_Job}/>
          </div>

          {/* PROJECTS */}
          <div className='section'>
            <p className='section-title'>projects</p>

            <Projects title={'AI Interview Coach'} year={'2026'} desc={"I built an AI Interview Coach and it just helped me prep for my own job search.Job hunting is brutal. You find the perfect role, spend hours crafting your resume, and then freeze when the interviewer asks 'tell me about a time when...' So I built something to fix that. This takes any SWE/ML/AI job description and turns it into a personalized mock interview — in seconds."}
            skills={['React.js','LangChain','FastApi', 'Python','Agnetic Models', 'LLM', 'Raspberry Pi', 'Cloudflare tunneling', 'nginx', 'Github Actions']}
            url={'https://marks-pi.com/ai-interview-coach/'}/>

            <Projects title={'AI Researcher'} year={'2026'} desc={"I have built a multi-agent AI researcher using 3 agents planner, research, and writer agent. They are connected using LangChain planner to researcher to writer. Backend is built using FastApi and Frontend is built using react.js. You can query the AI researcher with any question and it will search the internet and use those findings as context for the writer model. The writer will generate a report for you to read."}
            skills={['React.js','LangChain','FastApi', 'Python','Agnetic Models', 'LLM', 'Websockets', 'Raspberry Pi', 'Cloudflare tunneling', 'nginx', 'Github Actions']}
            url={'https://marks-pi.com/ai-researcher/'}/>

            <Projects title={'AI Code Reviewer'} year={'2026'} desc={"I have built a multi-agent AI code reviewer using 4 agents — bug, security, performance, and writer. The bug, security, and performance agents run concurrently using LangGraph's Send API, meaning all three analyze the code simultaneously rather than sequentially. Their findings are then passed to the writer agent which formats everything into a structured review. The backend is built using FastAPI and the frontend is built using React.js. You can submit any public GitHub Pull Request URL and the agents will fetch the diff, analyze the changed code, and automatically post a formatted markdown review comment directly to the PR on GitHub"}
            skills={['React.js','LangChain','FastApi', 'Python','Agnetic Models', 'LLM', 'Websockets', 'Raspberry Pi', 'Cloudflare tunneling', 'nginx', 'Github Actions']}
            url={'https://marks-pi.com/ai-code-reviewer/'}/>

            <Projects title={'LightsFinance'} year={'2024'} desc={"Lights Finance is a dividend calculator and finance web application. Shows your sector diversification, calculates your monthly dividend and calculates future value of the portfolio given previous metrics. Incorporates the rate of return for options and unusual activity in the options market. Has a built-in Robinhood report reader that calculates your monthly income from options and dividends."}
            skills={['Next.js','MongoDb', 'Raspberry Pi', 'Cloudflare tunneling', 'nginx']}
            url={'https://marks-pi.com/finance'}/>


          </div>
        </div>

        {/* SIDEBAR */}
        <div className='sidebar'>

          {/* CONTACT */}
          <div className='section'>
            <p className='section-title'>contact</p>
            <div className='side-card'>
              <div className='contact-row'><i className='fa-solid fa-location-dot'></i> Woodstock, GA</div>
              <div className='contact-row'><i className='fa-solid fa-globe' onClick={() => window.location.href = 'https://marks-pi.com/'}></i>marklights899@gmail.com</div>
              <div className='contact-row'><i className='fa-brands fa-linkedin' onClick={() => window.location.href = 'https://www.linkedin.com/in/mark-lights-1141811bb/'}></i>Mark Lights</div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className='section'>
            <p className='section-title'>education</p>
            <div className='side-card'>
              <p className='edu-school'>Georgia Institute of Technology</p>
              <p className='edu-degree'>M.S. Computer Science · Machine Learning</p>
              <p className='edu-meta'>In progress · Atlanta, GA</p>
            </div>
            <div className='side-card'>
              <p className='edu-school'>Francis Marion University</p>
              <p className='edu-degree'>B.S. Computer Science</p>
              <p className='edu-meta'>Completed - 2022</p>
            </div>
          </div>

          {/* SKILLS */}
          <div className='section'>
            <p className='section-title'>skills</p>
            <div className='side-card skills-card'>

              <Skills skillName={'Languages'} skillList={['Python','Java','JavaScript','TypeScript','SQL','Linux']}/>

              <Skills skillName={'AI / ML'} skillList={['LangGraph','LangChain','RAG','LoRA','ChromaDB','HuggingFace','PyTorch','Scikit-Learn']}/>

              <Skills skillName={'Computer Vision'} skillList={['OpenCV','InsightFace','RTSP']}/>

              <Skills skillName={'Backend'} skillList={['Spring Boot','FastAPI','Node.js','Spring Batch','OAuth2','PostgreSQL','MongoDB','OracleSQL']}/>

              <Skills skillName={'Frontend'} skillList={['React','Next.js','Vite','CSS Modules','HTML','CSS']}/>

              <Skills skillName={'Infrastructure'} skillList={['Docker','Azure','GCP','Cloudflare','Raspberry Pi','Nginx','GitHub Actions']}/>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Resume
