import React from 'react'
import LanguageIcon from '@mui/icons-material/Language'
import "../styles/style.css"
import { Link } from 'react-router-dom'
import logo from "../logo.png"
function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="https://seedsly.bloodanytime.com/index.html" target="_blank"><img src={logo} alt="" /> </Link>
      </div>
      <div className="middle">
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
        <a href="https://seedsly.bloodanytime.com/index.php" target="_blank" >Shop</a>
      </div>
      <div className="right">
        <div style={{ marginRight: "15px" }} id="google_translate_element"></div>
        {/* <button className='primary-button'><LanguageIcon /> Select Language </button> */}
      </div>
    </div>
  )
}

export default Navbar
