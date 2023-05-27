import React,{useEffect} from 'react'
import {useNavigate } from 'react-router-dom'

const Redirect = () => {
    const navigate = useNavigate()

    useEffect(() =>{
        if(window.location.pathname === "/"){
            navigate("/home")
        }
    },[])

  return (
    <div>redirect</div>
  )
}

export default Redirect