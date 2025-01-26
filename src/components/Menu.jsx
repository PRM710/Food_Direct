import React from 'react'
import { BiBookOpen } from 'react-icons/bi';
import '../styles/Menu.css'
import { Link } from 'react-router-dom'
import menulogo from '../images/menulogo.png'

const Menu = () => {
  return (
    <div className='menu'>
      <div className='see--menu'>
      See our menu 
      </div>
      
       <div className='menu--button'>
          <button> 
            <Link to="/dishes">
            {/* <BiBookOpen className='menu--icon'/>             */}
            <img src={menulogo} alt="Menu Logo.png" className='menu--icon'/>
            </Link>       
          </button>
        </div>
    </div>
  )
}

export default Menu
