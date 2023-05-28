import React from 'react'
import resume from '../files/resume.pdf'
import '../css/resume.css'
const Resume = () => {
  return (
    <div>
         <object data={resume} type="application/pdf"></object>
    </div>
  )
}

export default Resume