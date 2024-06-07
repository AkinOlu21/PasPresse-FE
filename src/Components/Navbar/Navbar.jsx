import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../Assets/assets'
import { Link } from 'react-router-dom'
const Navbar = () => {


const [menu, setMenu] = useState("home")

  return (
    <div className='nav'>
        <div className="nav-logo">
            <img src={assets.turtle_logo} alt='Logo turtle' className='logo'></img>
            <p>Pas Pressé</p>
            <ul className="nav-menu">
                <li  onClick={()=>{setMenu("home")}} >  <Link style={{textDecoration: 'none' }} to={'/'}>Home</Link> {menu==="home"?<hr/>:<></>}</li>
                <li  onClick={()=>{setMenu("shirts")}}>  <Link style={{textDecoration: 'none' }}  to={'/shirts'}>Shirts</Link> {menu==="shirts"?<hr/>:<></>}</li>
                <li  onClick={()=>{setMenu("hoodies")}}> <Link style={{textDecoration: 'none' }}  to={'/hoodies'}>Hoodies</Link> {menu==="hoodies"?<hr/>:<></>}</li>
                <li  onClick={()=>{setMenu("hats")}}> <Link style={{textDecoration: 'none' }}  to={'/hats'}>Hats</Link> {menu==="hats"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-search">
                <img className='icons' src={assets.search_icon} alt='search icon'></img>                    
                <img className='icons' src={assets.cart_icon} alt='search icon'></img> 
                <div className="nav-cart-count">0</div>                  
                 <Link to={'/login'}> <button>Login</button></Link>
                </div>
            
        </div>

    </div>
  )
}

export default Navbar