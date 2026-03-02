import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import ScrollBanner from '../ScrollBanner/ScrollBanner'
import OurStory from '../OurStory/OurStory'
import BestSelling from '../BestSelling/BestSelling'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <ScrollBanner/>
      <OurStory/>
      <BestSelling/>
    </div>
  )
}

export default Home
