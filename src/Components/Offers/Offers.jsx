import React from 'react'
import './Offers.css'
import Mansion_chain from '../Assets/Mansion_chain.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>MUST HAVE THIS SEASON</p> 
        <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={Mansion_chain} alt="" />
        </div>
    </div>
  )
}

export default Offers
