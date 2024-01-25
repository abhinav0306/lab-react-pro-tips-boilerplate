import React from 'react'
import {Link} from "react-router-dom"
import "./Nav.css"
const Nav = () => {
  return (
    <div className='Nav' >
        <Link to={"/"} className='Logo'>Kalvium❤️</Link>
        <div>
            <Link to={"/contact"} className='Pages'>Contact</Link>
            <Link to={"/registration"} className='Pages'>Registration Form</Link>
        </div>
    </div>
  )
}

export default Nav