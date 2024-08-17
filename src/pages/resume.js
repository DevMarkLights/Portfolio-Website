import React, {useEffect, useState} from 'react'
import '../css/resume.css'
import resume from '../files/Mark_Lights_Resume_Aug_24.png'
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
      <img className='resume1' src={resume} alt='lightsFinance'/>
    </>
    
  )
}

export default Resume