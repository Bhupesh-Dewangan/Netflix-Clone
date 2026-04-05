import React from 'react'
import Navbar from '../Components/Navbar'
import HeroText from '../Components/HeroText'
import TrendingSection from '../Components/TrendingSection'
import ReasonsToJoin from '../Components/ReasonsToJoin'
import FAQSection from '../Components/FAQSection'
import FooterSection from '../Components/FooterSection'

function HomePage() {
  return (
    <div className="min-h-screen h-full w-full bg-[url('./assets/Background.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50 bg-linear-to-t from-black via-transparent to-black/80" />
      {/* Bottom vignette only: eases posters into the trending black without washing the whole hero */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[min(48vh,28rem)] bg-linear-to-b from-transparent via-black/35 to-black"
        aria-hidden
      />
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />
        <HeroText />
        <TrendingSection />
        <ReasonsToJoin />
        <FAQSection />
        <FooterSection/>
      </div>
    </div>
  )
}

export default HomePage