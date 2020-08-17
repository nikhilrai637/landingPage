import React from 'react'
import Navbar from './Navbar/Navbar'
import About from './AboutUs/About'
import Footer from './Footer/Footer'
import Advantages from './Advantages/Advantages'
import Hero from './Hero/Hero'
import Domains from './Domains/Domains'

function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Domains/>
            <Advantages/>
            <About/>

            <Footer/>
        </div>
    )
}

export default Home
