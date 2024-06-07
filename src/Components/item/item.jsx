import React from 'react'
import './item.css'

const item = (props) => {
  return (
    <div className='item'>
       <img src={props.image} alt="" /> 
       <p>{props.name}</p>
       <div className='item-avalability'>
        <div className='item-new'>
            {props.new_item}
        </div>
        <div className='item-available-not'>
            {props.not_available}
        </div>
       </div>
    </div>
  )
}
export default item
