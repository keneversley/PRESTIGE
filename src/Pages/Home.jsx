import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import { Offers} from '../Components/Offers/Offers'
import Yachts from '../Components/Yachts/Yachts'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Yachts/>
    </div>
  )
}
export default Home