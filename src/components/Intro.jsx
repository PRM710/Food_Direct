import React from 'react';
import '../styles/Intro.css';
import chef from '../images/chef3.png';
import Logo from './Logo';
import Menu from './Menu';

const Intro = () => {
  return (
    <div className='container'>
              <Logo className='logo'/>
              <div className='column'>
      <div className='left--column'>
        <div className='intro--text'>
        <h4 className='title'>
              In my kitchen, every dish is a love letter to your taste buds
          </h4>
              <p>
                — no ready-mades, just pure homemade goodness. Each order is our priority and is carefully crafted like our own craving, ensuring that your hunger is not just met, but pampered.
              </p>
              </div>
      </div>
    
      <div className='right--column'>
      <img src={chef} alt="Cloud Kitchen Delhi Logo" className="chef--logoimg"></img>
      </div>
      </div>
      <Menu className='intro--menu'/>
    </div>
  );
};

export default Intro;
