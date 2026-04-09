import React from 'react'
import Navbar from '../Components/Navbar'
import HeroText from '../Components/HeroText'
import TrendingSection from '../Components/TrendingSection'
import ReasonsToJoin from '../Components/ReasonsToJoin'
import FAQSection from '../Components/FAQSection'
import FooterSection from '../Components/FooterSection'

function HomePage() {
  return (
    <div className="min-h-screen w-full bg-black">
      {/* Background image only for hero block */}
      <section className="relative h-full w-full bg-[url('./assets/Background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        <div className="relative z-10 flex h-full flex-col">
          <Navbar />
          <HeroText />
        </div>
      </section>

      <div className="relative z-10 flex flex-col">
        <TrendingSection />
        <ReasonsToJoin />
        <FAQSection />
        <FooterSection />
      </div>
    </div>
  )
}

export default HomePage