import React, {useEffect, useState} from 'react'
import DP_FINAL_PROJECT from '../files/Final_Project_Report_CS7643.pdf'

const Article = () => {
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
    <div style={{display:"flex", justifyContent: "center", height: '90vh'}}>
        <iframe
            src={DP_FINAL_PROJECT}
            style={{ border: "none", minHeight:"90%", minWidth: "90%" }}
        />
    </div>
    
  )
}

export default Article