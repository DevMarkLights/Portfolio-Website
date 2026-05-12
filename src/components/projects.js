

const Projects = ({title, year, desc, skills, url}) =>{


    return(
        <div className='proj-card' onClick={() => {window.location.href = url}}>
            <div className='proj-top'>
            <span className='proj-name'>{title}</span>
            <span className='proj-year'>{year}</span>
            </div>
            <p className='proj-desc'>{desc}</p>
            <div className='tags'>
                {skills.map((item) =>{
                    return(
                        <span className='tag'>{item}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects