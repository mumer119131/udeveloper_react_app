import React from 'react'
import Header from './components/header/Header'
import Work from  './components/work/Work'
import Team from './components/team/Team'
import Reviews from './components/reviews/Reviews'
import Gallery from './components/gallery/Gallery'
import Brands from './components/brands/Brands'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header />
        <Work />
        <Team />
        <Reviews />
        <Gallery />
        <Brands />
        <Contact />
        <Footer />
    </>
  )
}

export default App