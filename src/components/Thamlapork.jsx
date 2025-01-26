import React from 'react'
import Logo from './Logo';
import thamlaimg from '../images/thamla.jpg';
import '../styles/Thamla.css'

function Thamlapork() {
  return (
    <div className='food4'>
         <Logo />
        <div className='food4--column'> 

            <div className='left--side4'>
             <div className='food4--text'>
                <h2 className='food4--title'> Thamla Pork </h2>
                <p> This pork recipe has been unchanged for decades, yet every Christmas, the same irresistible craving that calls me back to my Mum's village. </p>            
              </div>
            </div>

            <div className='right--side4'>
                <img src={thamlaimg} alt="Thamla Pork.jpg" className='food4--img'/>                         
            </div>

        </div>
        <div className='order--food4'>
          <button className='order--button4'>
            Order Now
          </button>
        </div>
    </div>
  )
}

export default Thamlapork
