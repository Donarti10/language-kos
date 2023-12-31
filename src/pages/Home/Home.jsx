import React from 'react'
import Banner from '../../components/pages/Home/Banner'
import Naavbar from '../../components/shared/Navbar/Naavbar'
import SecondBanner from '../../components/pages/Home/SecondBanner'
import ThirdBanner from '../../components/pages/Home/ThirdBanner'
import FourthBanner from '../../components/pages/Home/FourthBanner'
import ImageBanner from '../../components/pages/Home/ImageBanner'
import LastBanner from '../../components/pages/Home/LastBanner'
import Footer from '../../components/shared/Footer/Footer'
import Footer2 from '../../components/shared/Footer/Footer2'
// import SixBanner from '../../components/pages/Home/SixBanner'

const Home = () => {
  return (
    <div className='home-page'>
        <Naavbar />
        <Banner />
        <SecondBanner />
        <ThirdBanner />
        <FourthBanner />
        <ImageBanner />
        {/* <SixBanner /> */}
        <LastBanner />
        <Footer />
        <Footer2 />
    </div>
  )
}

export default Home