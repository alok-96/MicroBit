import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
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
            <HashLink to={'/#home'}>Home</HashLink>
            <HashLink to={'/#about'}>About</HashLink>
            <HashLink to={'/#brands'}>Brands</HashLink>
            <Link to={'/services'}>Services</Link>
            <Link to={'/contact'}>Contact</Link>
        </main>
    </nav>
  )
}

export default Header