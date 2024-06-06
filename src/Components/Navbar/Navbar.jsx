import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar =() => {
    const [menu,setMenu] = useState('shop')
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>RENTER</p>
        </div>
        <ul className='nav-menu'>
        <li onClick={()=>{setMenu('renter')}}><Link style={{ textDecoration: 'none'}} to='/'>Renter</Link>{menu==='renter'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('manor')}}><Link style={{ textDecoration: 'none'}} to='/manor'>Manor</Link>{menu==='manor'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('celine')}}><Link style={{ textDecoration: 'none'}} to='/celine'>Celine</Link>{menu==='celine'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('luna')}}><Link style={{ textDecoration: 'none'}} to='/luna'>Lunar</Link>{menu==='luna'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('mira')}}><Link style={{ textDecoration: 'none'}} to='/mira'>Mira</Link>{menu==='mira'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('oasis')}}><Link style={{ textDecoration: 'none'}} to='/oasis'>Oasis</Link>{menu==='oasis'?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>0</div>
        </div>
        



    </div>
  )
}

export default Navbar




