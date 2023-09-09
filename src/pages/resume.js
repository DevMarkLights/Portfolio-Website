import React, {useEffect, useState} from 'react'
import '../css/resume.css'
import resume1 from '../files/resume1.png'
import resume2 from '../files/resume2.png'
import resumeFromAi_1 from '../files/resume from ai pngs/resumeFromAi_1.png'
import resumeFromAi_2 from '../files/resume from ai pngs/resumeFromAi_2.png'
const Resume = () => {
  const [mediumDevice,setMediumDevice] = useState(false)
  
  useEffect(() =>{
    if(window.width < 499){
      setMediumDevice(!mediumDevice)
    }else{
      setMediumDevice(!mediumDevice)
    }
  },[])

  return (
    <>
      <img className='resume1' src={resumeFromAi_1}/>
      <img className='resume2' src={resumeFromAi_2}/>
    </>
    
  )
}

export default Resume