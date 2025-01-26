import React from 'react';
import '../styles/Dishes.css';
import Logo from './Logo';
import ooti from '../images/ooti.jpg';
import chicken from '../images/Chicken.jpg';
import pork from '../images/pork.jpg';
import thamla from '../images/thamla.jpg';
import Pan from '../images/Pan.png';
import { Link } from 'react-router-dom'

const Dishes = () => {
  return (
    <div className='dish'>
                <Logo className='logo'/>
        <div className='mid--dish'>
        <div className='left--dish'>
            <div className='dishes--4'>
                 <h2 className='dish--text'>
                     Dishes - 4
                 </h2>
                 <div className='top--dishes'>
                 <div className='item1'>
                        <Link to="/dishes/ooti">
                        <img src={ooti} alt="Ooti" className="item1"></img>
                         <div className="overlay-text1">Ooti</div>
                        </Link>                   
                     </div>

                    <div className='item2'>
                        <Link to="/dishes/chicken">
                        <img src={chicken} alt="Chicken" className="item2"></img>
                        <div className="overlay-text2">Chicken</div>
                        </Link>                    
                    </div>
                 </div>
                 <div className='bot--dishes'>
                 <div className='item3'>
                        <Link to="/dishes/nagastylepork">
                        <img src={pork} alt="Pork" className="item3"></img>
                        <div className="overlay-text3">Naga Style Pork</div>
                        </Link>                       
                    </div>
                    <div className='item4'>
                        <Link to="/dishes/thamlapork">
                        <img src={thamla} alt="Thamla" className="item4"></img>
                        <div className="overlay-text4">Thamla Pork</div>
                        </Link>                        
                    </div>
                 </div>
             </div> 
                 
        </div>
        <div className='right--dish'>
            <img src={Pan} alt="Pan.png" className="pan--logo"></img>
        </div>
        </div>
        
    </div>
  );
}

export default Dishes;
