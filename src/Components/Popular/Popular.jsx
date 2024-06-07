import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../item/item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPLUAR IN MIAMI BEACH</h1>
        <hr />
        <div className='popular-item'>
            {data_product.map((item,i)=>{return <Item key={i} id={item.id} name={item.name} image={item.image} new_avalability={item.new_item} not_available={item.not_available} />})}
        </div>
    </div>
  )
}
export default Popular