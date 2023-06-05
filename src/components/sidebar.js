import React, { useState } from 'react'
import '../css/sidebar.css'
import {Link} from 'react-router-dom'
import Contact from '../pages/contact'
const Sidebar = ({array}) => {
    const [contactClicked,setContactClicked] = useState(false)
  return (
    <div className='sidebar-body'>
        {
            array.map((item) => {
                return(
                    <Link to={`/${item}`} style={{textDecoration: 'none'}}>
                        <p>{item}</p>
                    </Link>
                )
            })
        }
        <p onClick={()=>{setContactClicked(!contactClicked)}}>contact</p>  
        {
            contactClicked &&
            <Contact/>
        }
    </div>
    
  )
}

export default Sidebar