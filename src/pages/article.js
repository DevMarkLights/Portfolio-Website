import React, {useEffect, useState} from 'react'
import DP_FINAL_PROJECT from '../files/Final_Project_Report_CS7643.pdf'

const Article = () => {
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
    {mediumDevice ?
        <a
            href={DP_FINAL_PROJECT}
            rel="noopener noreferrer"
            style={{ display: "block", marginBottom: "8px", textDecoration: "none", color: 'white' }}
            >
        📄 Open Fine-tuning Pre-trained Models for Multimodal Sentiment Analysis: A Comprehensive Analysis of Visual-Textual Emotion Recognition (Full Screen)
        </a>
    :
        <div style={{display:"flex", justifyContent: "center", height: '90vh'}}>
            <iframe
                src={DP_FINAL_PROJECT}
                style={{ border: "none", minHeight:"90%", minWidth: "90%" }}
            />
        </div>
    }
    </>
    
  )
}

export default Article