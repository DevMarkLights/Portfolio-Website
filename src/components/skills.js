

const Skills = ({skillName = "", skillList = []}) => {
    return(
        <div className='skill-group'>
            <p className='skill-group-label'>{skillName}</p>
            <div className='chips'>
                {Array.isArray(skillList) && skillList.map((item)=>{
                    return(
                         <span className='chip'>{item}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills