import React from 'react'
import './Footer.css'
import product from '../../assets/product.svg'
import delivery from '../../assets/delivery.svg'
import discount from '../../assets/discount.svg'
import bestprice from '../../assets/market.svg'
import kartlogo from '../../assets/logo.png'
import { LuHome } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import playstore from '../../assets/playstore.svg'
import appstore from '../../assets/appstore.svg'
import payingimg from '../../assets/paytm.png'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialPinterest } from "react-icons/ti";


const Footer = () => {
  return (
    <div>
        <div className='footerdiv'>
            <div className='footersub'>
                <div className='headdetails'>
                    <div className='freshproduct'>
                        <img src={product} alt="" />
                        <p>Every Fresh Products</p>
                    </div>
                    <div className='delivery'>
                        <img src={delivery} alt="" />
                        <p>Free Delivery For Order Over $50</p>
                    </div>
                </div>
                <div className='headdetails1'>
                    <div className='discounts'>
                        <img src={discount} alt="" />
                        <p>Daily Mega Discounts</p>
                    </div>
                    <div className='bestprice'>
                        <img src={bestprice} alt="" />
                        <p>Best Price On The Market</p>
                    </div>
                </div>
                <div className='contactdetails'>
                    <div className='subcontact'>
                        <div className='fastkartdiv'>
                            <img className='fastkartimg' src={kartlogo} alt="" />
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.</p>
                            <div className='home'>
                                <LuHome  />
                                <li className='homep'>1418 Riverwood Drive, CA 96052, US</li>
                            </div>
                            <div className='home'>
                                <FiMail />
                                <li className='homep'>support@fastkart.com</li>
                            </div>
                        </div>
                        <div className='categoriesdiv'>
                            <h4>Categories</h4>
                            <li>Vegetables & Fruit</li>
                            <li>Beverages</li>
                            <li>Meats & Seafood</li>
                            <li>Frozen Foods</li>
                            <li>Biscuits & Snacks</li>
                            <li>Grocery & Staples</li>
                        </div>
                        <div className='linksdiv'>
                            <h4>Useful Links</h4>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </div>
                        <div className='helpcenter'>
                            <h4>Help Center</h4>
                            <li>Your Order</li>
                            <li>Your Account</li>
                            <li>Track Order</li>
                            <li>Your Wishlist</li>
                            <li>Search</li>
                            <li>FAQ</li>
                        </div>
                        <div className='contactus'>
                            <h4>Contact Us</h4>
                            <div className='hotline'>
                                <IoCallOutline />
                                <div className='numberdiv'>
                                    <h6>Hotline 24/7 :</h6>
                                    <h5>+91 888 104 2340</h5>
                                </div>
                            </div>
                            <div className='hotline'>
                                <FiMail />
                                <div className='numberdiv'>
                                    <h6>Email Address :</h6>
                                    <h5>fastkart@hotmail.com</h5>
                                </div>
                            </div>
                            <div className='downloadapp'>
                                <h5>Download App :</h5>
                                <div className='stores'>
                                    <img src={playstore} alt="" />
                                    <img src={appstore} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='contactus1'>
                            <h4>Contact Us</h4>
                            <div className='hotline'>
                                <IoCallOutline />
                                <div className='numberdiv'>
                                    <h6>Hotline 24/7 :</h6>
                                    <h5>+91 888 104 2340</h5>
                                </div>
                            </div>
                            <div className='hotline'>
                                <FiMail />
                                <div className='numberdiv'>
                                    <h6>Email Address :</h6>
                                    <h5>fastkart@hotmail.com</h5>
                                </div>
                            </div>
                            <div className='downloadapp'>
                                <h5>Download App :</h5>
                                <div className='stores'>
                                    <img src={playstore} alt="" />
                                    <img src={appstore} alt="" />
                                </div>
                            </div>
                        </div> */}
                </div>
                <div className='lastfootercon'>
                    <div className='totalcon'>
                        <h5>©2022 Fastkart All rights reserved</h5>
                        <div className='payingimg'>
                            <img className='paytm' src={payingimg} alt="" />
                        </div>
                        <div className='connecteddiv'>
                            <h6>Stay Connected:</h6>
                            <TiSocialFacebook />
                            <TiSocialTwitter />
                            <IoLogoInstagram />
                            <TiSocialPinterest />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
