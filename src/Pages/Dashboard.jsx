import React from 'react'
import MainNavbar from '../Components/MainNavbar'
import Hero from '../Components/Hero'
import Collection from '../Components/Collection'
import Footer from '../Components/Footer'

function Dashboard() {
    return (
        <div className='flex flex-col w-full'>
            <MainNavbar />
            <Hero />
            <Collection />
            <Footer />
        </div>
    )
}

export default Dashboard