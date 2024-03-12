import { limeGreen } from '@/constants'
import React from 'react'
import { Navbar } from './navbar'
import HeroSection from './herosection'

const BuyCrypto = () => {
  return (
    <div style={{ backgroundColor: limeGreen, height: "100vh" }}>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default BuyCrypto