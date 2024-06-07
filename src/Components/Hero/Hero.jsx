import React from 'react'
import './Hero.css'
import { assets } from '../Assets/assets'


const Hero = () => {
  return (
     <div className='hero'>
        <div className="hero-left">
         <h2>New Arrivals</h2>
            <div>
              <div className="hero-hand-icon">
                <p>new</p>
                <img src={assets.waving}></img>
             </div> 
                <p>Collection</p>
                 <p>for everyone</p>
            </div>
            
             <div className="hero-latest-btn">
            <div>Latest Collection</div>
             <img></img>
            </div>
          </div>
 
            <div className="hero-right">
                <img src={assets.hero_hd2} alt="" />
    
             </div>
       
    
    
    
    
    
    </div>
    
  )
}

export default Hero