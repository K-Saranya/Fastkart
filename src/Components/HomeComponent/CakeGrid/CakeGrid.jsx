import React from 'react'
import './CakeGrid.css'
import cake1 from '../../../assets/cake1.jpg'
import cake2 from '../../../assets/cake2.jpg'
import cake3 from '../../../assets/cake3.jpg'
import cake4 from '../../../assets/cake4.jpg'
import cake5 from '../../../assets/cake5.jpg'
import cake6 from '../../../assets/cake6.jpg'
import { TiStar } from "react-icons/ti";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

const CakeGrid = () => {
  return (
    <div>
      <div className='cakegrid'>
        <div className='subgrid'>
          <div className='cakess'>
                  <div className='twocolcakes1'>
                  <div className='wholetop'>
                  <div className='header'>
                    <h3>Recently Added</h3>
                    <div className='divline'><div className='brownline'></div></div>
                  </div> 
                  <div className='cake1'>
                        <img className='cakee' src={cake1} alt="" />
                        <div className='cakecon'>
                          <h6>Muffets Jammy Cake</h6>
                          <div>
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <MdOutlineStarBorderPurple500 className='stars'/>
                          </div> 
                          <p>Rs.150  <span>Rs.180</span></p>
                        </div>
                      </div>
                      <div className='cake2'>
                        <img className='cakee' src={cake2} alt="" />
                        <div className='cakecon'>
                          <h6>Creamy Chocolate Cake</h6>
                          <div>
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <MdOutlineStarBorderPurple500 className='stars'/>
                          </div> 
                          <p>Rs.150  <span>Rs.180</span></p>
                        </div>
                      </div>
                      <div className='cake1'>
                        <img className='cakee' src={cake1} alt="" />
                        <div className='cakecon'>
                          <h6>Muffets Jammy Cake</h6>
                          <div>
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <MdOutlineStarBorderPurple500 className='stars'/>
                          </div> 
                          <p>Rs.150  <span>Rs.180</span></p>
                        </div>
                      </div>
                  </div>  
                  <div className='wholetop'>
                  <div className='header'>
                    <h3>Top Selling</h3>
                    <div className='divline'><div className='brownline'></div></div>
                  </div> 
                  <div className='cake1'>
                        <img className='cakee' src={cake3} alt="" />
                        <div className='cakecon'>
                          <h6>Grand Celebration Cake</h6>
                          <div>
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <MdOutlineStarBorderPurple500 className='stars'/>
                          </div> 
                          <p>Rs.150  <span>Rs.180</span></p>
                        </div>
                      </div>
                      <div className='cake2'>
                        <img className='cakee' src={cake4} alt="" />
                        <div className='cakecon'>
                          <h6>Creamy White Forest</h6>
                          <div>
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <MdOutlineStarBorderPurple500 className='stars'/>
                          </div> 
                          <p>Rs.150  <span>Rs.180</span></p>
                        </div>
                      </div>
                      <div className='cake1'>
                        <img className='cakee' src={cake3} alt="" />
                        <div className='cakecon'>
                          <h6>Grand Celebration Cake</h6>
                          <div>
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <MdOutlineStarBorderPurple500 className='stars'/>
                          </div> 
                          <p>Rs.150  <span>Rs.180</span></p>
                        </div>
                      </div>
                      </div>
                      <div className='wholetop'>
                  <div className='header'>
                    <h3>Trending Products</h3>
                    <div className='divline'><div className='brownline'></div></div>
                  </div>
                  <div className='cake1'>
                        <img className='cakee' src={cake5} alt="" />
                        <div className='cakecon'>
                          <h6>Sweet Cake</h6>
                          <div>
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <MdOutlineStarBorderPurple500 className='stars'/>
                          </div> 
                          <p>Rs.150  <span>Rs.180</span></p>
                        </div>
                      </div>
                      <div className='cake2'>
                        <img className='cakee' src={cake6} alt="" />
                        <div className='cakecon'>
                          <h6>Fruit Cherry Cake</h6>
                          <div>
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <MdOutlineStarBorderPurple500 className='stars'/>
                          </div> 
                          <p>Rs.150  <span>Rs.180</span></p>
                        </div>
                      </div>
                      <div className='cake1'>
                        <img className='cakee' src={cake5} alt="" />
                        <div className='cakecon'>
                          <h6>Sweet Cake</h6>
                          <div>
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <TiStar className='stars' />
                            <MdOutlineStarBorderPurple500 className='stars'/>
                          </div> 
                          <p>Rs.150  <span>Rs.180</span></p>
                        </div>
                      </div>
                      </div>
                  </div>
                  {/* <div className='twocolcakes1'> */}
                      
                  {/* </div> */}
                  {/* <div className='twocolcakes1'> */}
                                        {/* </div> */}
              </div>
        </div>
      </div>
    </div>

  )
}

export default CakeGrid
