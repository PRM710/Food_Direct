import React from 'react'
import logo from '../images/logo.png';
import '../styles/Logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='header'>
            <Link to="/">
              <img src={logo} alt="Cloud Kitchen Delhi Logo" className='logo'></img>
            </Link>
    </div>
  )
}

export default Logo

