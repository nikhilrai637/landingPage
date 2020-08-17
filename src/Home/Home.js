import React from 'react'
import Navbar from './Navbar/Navbar'
import Page1 from './Page1/Page1'
import Page2 from './Page2/Page2'
import Page3 from './Page3/Page3'
import About from './AboutUs/About'
import Footer from './Footer/Footer'
function Home() {
    return (
        <div>
            <Navbar/>
            <Page1/>
            <Page2/>
            <Page3/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home
