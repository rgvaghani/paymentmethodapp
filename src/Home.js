import React from 'react'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Footer from './Footer'
import Header from './Header'
import HowItWorks from './HowItWorks'
import Navbar from './navbar'
import Services from './Services'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <HowItWorks/>
      <Aboutus/>
      <Services/>
      <Contactus/>
      <Footer/>
    </>
  )
}

export default Home
