import React from 'react';
import Logo from './Logo';
import chickenimg from '../images/Chicken.jpg';
import '../styles/Chicken.css';

function Chicken() {
  const handleOrderClick = () => {

    const dmLink = 'https://www.instagram.com/direct/t/17847224382319784/';
    const appDeepLink = 'instagram://direct/t/17847224382319784';


    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

 
    if (isMobile) {
      window.location.href = appDeepLink; 
    } else {
      window.location.href = dmLink; 
    }
  };

  return (
    <div className='food2'>
      <Logo />
      <div className='food2--column'>
        <div className='left--side2'>
          <div className='food2--text'>
            <h2 className='food2--title'> Chicken </h2>
            <p>
              A fusion of different traditional recipes with my own unique flair, delivering a mouthwatering and an aromatic feast.
            </p>
          </div>
        </div>
        <div className='right--side2'>
          <img src={chickenimg} alt="Chicken" className='food2--img' />
        </div>
      </div>
      <div className='order--food2'>
        <button className='order--button2' onClick={handleOrderClick}>
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Chicken;
