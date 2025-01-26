import React from 'react'
import Logo from './Logo';
import nagastyleimg from '../images/pork.jpg';
import '../styles/Nagastyle.css'

function Nagastyle() {
  return (
    <div className='food3'>
         <Logo />
        <div className='food3--column'> 

            <div className='left--side3'>
              <div className='food3--text'>
                <h2 className='food3--title'> Naga Style Pork</h2>
                <p> A flavour bomb where juicy pork collides with explosive Naga chillies, slow cooked to perfection. </p>
            </div>
            </div>

            <div className='right--side3'>
                <img src={nagastyleimg} alt="Naga Style Pork.jpg" className='food3--img'/>           
            </div>

        </div>
        <div className='order--food3'>
          <button className='order--button3'>
            Order Now
          </button>
        </div>
    </div>
  )
}

export default Nagastyle
