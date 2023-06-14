import React, {useEffect, useState} from 'react'
import '../css/resume.css'
import resume1 from '../files/resume1.png'
import resume2 from '../files/resume2.png'
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
      <img className='resume1' src={resume1}/>
      <img className='resume2' src={resume2}/>
    </>
    
  )
}

export default Resume