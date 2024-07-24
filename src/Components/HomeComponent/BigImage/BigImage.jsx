import React from 'react'
import './BigImage.css'
import { FaArrowRightLong } from "react-icons/fa6";


const BigImage = () => {
  return (
    <div>
      <div className='bigdiv'>
        <div className='smalldiv'>
            <div className='imagediv'>  
                <div className='imageleft'>
                    <div className='imgleftcontent'>
                        <div className='threecontent'>
                            <h6>Fresh & Delicious</h6>
                            <h2>Fresh Bread</h2>
                            <p>Bento box burritos cherry bomb pepper dark and stormy with ginger..</p>
                            <div className='lastcontent'>
                                <a href="">Shop Now <FaArrowRightLong />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='imageright'>
                  <div className='imgrightcontent'>
                      <div className='threetextcontent'>
                          <div className='offer'>
                              <h6>Exclusive Offer</h6>
                              <p className='offerptag'>30% Off</p>
                          </div>
                          <h1>WE'LL MAKE <span>HANDMADE</span> YOUR <span>SWEET</span></h1>
                          <p className='smallcon'>Earl grey latte Thai basil curry grains alfalfa sprouts banana bread ginger carrot...</p>
                          <button className='buttonshopnow'>Shop Now <span><FaArrowRightLong /></span></button>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}


export default BigImage
