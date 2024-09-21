import React from 'react'
import Navbar from '../components/Navbar'
import Freebook from '../components/Freebook'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <div>
        <Navbar/>
        <Banner/>
        <Freebook/>
        <Footer/>

    </div>
  </>
  )
}

export default Home