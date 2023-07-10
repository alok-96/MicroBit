import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.scss'
import logo from '../assets/asset3.png'

const Header = () => {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="logo-icon"  style={{width:"30px"}}/>
            <h1>MicroBit</h1>
        </div>
        <main>
            <Link to={'/'}>Home</Link>
            <Link to={'/#about'}>About</Link>
            <Link to={'/#brands'}>Brands</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'/contacts'}>Contact Us</Link>
        </main>
    </nav>
  )
}

export default Header