import React from 'react'
import "./Home.css"
import HeroSection from '../../components/heroSection/HeroSection'
import AboutUs from '../../components/aboutUsSection/AboutUs'

function Home({ aboutRef }) {
  return (
    <div>
    <HeroSection />
    <AboutUs aboutRef={aboutRef} />
    </div>
  )
}

export default Home
