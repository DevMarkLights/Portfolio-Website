import React from 'react'
import {Link} from 'react-router-dom'
import '../css/contact.css'
const Contact = () => {
  return (
    <div className='contact-body'>
        <p id='contact2'>Contacts</p>
        <p>Email:</p>
        <p className='indent'>marklights899@gmail.com</p>
        <p>Message Me:</p>
        <Link to={'https://www.linkedin.com/in/mark-lights-1141811bb'} style={{textDecoration: 'none'}}>
            <p className='indent'><i className="fa-brands fa-linkedin"></i></p>
        </Link>
    </div>
  )
}

export default Contact