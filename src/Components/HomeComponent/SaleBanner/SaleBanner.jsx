import React from 'react'
import './SaleBanner.css'
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { TbBrandWhatsapp } from "react-icons/tb";


const SaleBanner = () => {
  return (
    <div>
        <div className='bannerdiv'>
            <div className='subbanner'>
                <div className='imgbanner'>
                    <div className='bannercon'>
                      <div className='subbannercon'>
                          <h3>LIMITED TIME OFFER</h3>
                          <h2>Super</h2>
                          <h1>SALE</h1>
                          <h4>www.fastkart.com</h4>
                          <div className='contacticonss'>
                            <IoLogoInstagram className='contacticons' />
                            <BiLogoFacebook className='contacticons' />
                            <IoLogoTwitter className='contacticons' />
                            <TbBrandWhatsapp className='contacticons'/>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default SaleBanner
