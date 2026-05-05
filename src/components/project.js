import React from 'react'


const Project = ({title,img, description,url,skills,hosting}) => {
    return(
        <div className='projects-list'>
            <div className='left-side-of-project'>
                <h2>{title}</h2>
                <h3>Description:</h3>
                <ul>
                    <li>
                    {description}
                    </li>
                </ul>
                <h3>Skills/Technologies used:</h3>
                <ul>
                    {skills?.map((item) =>{
                        return(
                            <li key={item}>{item}</li>
                        )
                    })}
                    <ul>
                        {hosting?.map((item) =>{
                            return(
                                <li key={item}>{item}</li>
                            )
                        })}
                    </ul>
                </ul>
            </div>

            <div className='right-side-of-project'>
                <img className='lightsFinanceLandingPage' src={img} alt='landing page of website' onClick={() => {window.location.href = url}}/>
            </div>
        </div>
    )

}

export default Project