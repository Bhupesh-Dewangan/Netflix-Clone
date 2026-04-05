import React from 'react'
import Navbar from '../Components/Navbar'
import HeroText from '../Components/HeroText'

function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[url('./assets/Background.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50 bg-linear-to-t from-black via-transparent to-black/80"></div>
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />
        <HeroText />
      </div>
    </div>
  )
}

export default HomePage