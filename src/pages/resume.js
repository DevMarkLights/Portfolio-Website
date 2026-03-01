import React, {useEffect, useState} from 'react'
import '../css/resume.css'
// import resume from '../files/Mark_Lights_Resume_Aug_24.png'
// import resume1 from '../files/Resume Dec_25-1.png'
// import resume2 from '../files/Resume Dec_25-2.png'
import resume from '../files/Lights_Mark_Resume_March_1_2026.pdf'
const Resume = () => {
  const [mediumDevice,setMediumDevice] = useState(false)
  
  useEffect(() =>{
    window.addEventListener('resize', () =>{
      if(window.outerWidth < 499){
        setMediumDevice(true)
      }else{
        setMediumDevice(false)
      }
    })

    if(window.outerWidth < 499){
      setMediumDevice(true)
    }else{
      setMediumDevice(false)
    }
  },[])

  return (
    <>
      {/* <img className='resume1' src={resume1} alt='lightsFinance'/>
      <img className='resume1' src={resume2} alt='lightsFinance'/> */}
      {mediumDevice ?
      <div style={{textAlign:'center'}}>
        <a
          href={resume}
          rel="noopener noreferrer"
          style={{ display: "block", marginBottom: "8px", textDecoration: "none", color: 'white' }}
          >
            RESUME
        </a>
      </div>
      

      :

      <div style={{height: '85vh', textAlign: 'center'}}>
        <iframe
          src={resume}
          style={{ border: "none", minHeight:"100%", minWidth: "90%" }}
        />
      </div>
      }
      
      
    </>
    
  )
}

export default Resume