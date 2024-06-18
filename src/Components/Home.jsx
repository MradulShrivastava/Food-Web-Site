import React from 'react'
import Hero from './Hero'
import Topicks from './Topicks'
import Delivery from './Delivery'

function Home({handleAdd}) {
  return (
    <div>
      <Hero></Hero>
      <Topicks handleAdd={handleAdd}></Topicks>
      <Delivery></Delivery>
      <></>
    </div>
  )
}

export default Home
