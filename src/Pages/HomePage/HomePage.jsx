import React from 'react'
import Nav from '../../Components/NavBar/Nav'
import BigImage from '../../Components/HomeComponent/BigImage/BigImage'
import Smallicons from '../../Components/HomeComponent/Smallicons/Smallicons'
import CouponCode from '../../Components/HomeComponent/CouponCode/CouponCode'
import FourItems from '../../Components/HomeComponent/FourItems/FourItems'
import TopSave from '../../Components/HomeComponent/TopSave/TopSave'
import DailyStaples from '../../Components/HomeComponent/DailyStaples/DailyStaples'
import SaleBanner from '../../Components/HomeComponent/SaleBanner/SaleBanner'
import CakeGrid from '../../Components/HomeComponent/CakeGrid/CakeGrid'
import NewsLetter from '../../Components/HomeComponent/NewsLetter/NewsLetter'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Nav/>
      <BigImage/>
      <Smallicons/>
      <CouponCode/>
      <FourItems/>
      <TopSave/>
      <DailyStaples/>
      <SaleBanner/>
      <CakeGrid/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default HomePage
