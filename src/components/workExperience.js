
const WorkExperience = ({jobTitle, dates, companyName, location, roleDescription}) =>{

    return(
        <div className='work-card'>
            <div className='work-top'>
            <span className='work-title'>{jobTitle}</span>
            <span className='work-dates'>{dates}</span>
            </div>
            <p className='work-company'>{companyName} · {location}</p>
            <ul className='work-bullets'>
                {roleDescription.map((item,index) =>{

                    return(
                        <li key={item.substring(0,5)}>{item}</li>

                    )
                })}
            </ul>
        </div>
    )

}

export default WorkExperience