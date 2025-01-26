import React from 'react'
import Logo from './Logo';
import ootiimg from '../images/ooti.jpg';
import '../styles/Ooti.css'

function Ooti() {
  return (
    <div className='food'>
      <Logo/>
        <div className='food--column'> 

            <div className='left--side'>
             <div className='food--text'>
                <h2 className='food--title'> Ooti </h2>
                <p> A comfort, fuss-free dish where tender peas soak up rich flavours, perfect for any quick meal. </p>            
              </div>
            </div>

            <div className='right--side'>
                <img src={ootiimg} alt="ooti.jpg" className='food--img'/>                         
            </div>

        </div>
        <div className='order--food'>
          <button className='order--button'>
            Order Now
          </button>
        </div>
    </div>
  )
}

export default Ooti
