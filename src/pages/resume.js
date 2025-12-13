import React, {useEffect, useState} from 'react'
import '../css/resume.css'
import resume from '../files/Mark_Lights_Resume_Aug_24.png'
import resume1 from '../files/Resume Dec_25-1.png'
import resume2 from '../files/Resume Dec_25-2.png'
const Resume = () => {
  const [mediumDevice,setMediumDevice] = useState(false)
  
  useEffect(() =>{
    window.addEventListener('resize', () =>{
      if(window.innerWidth < 499){
        setMediumDevice(!mediumDevice)
      }else{
        setMediumDevice(!mediumDevice)
      }
    })

    if(window.width < 499){
      setMediumDevice(!mediumDevice)
    }else{
      setMediumDevice(!mediumDevice)
    }
  },[])

  return (
    <>
      <img className='resume1' src={resume1} alt='lightsFinance'/>
      <img className='resume1' src={resume2} alt='lightsFinance'/>
    </>
    
  )
}

export default Resume