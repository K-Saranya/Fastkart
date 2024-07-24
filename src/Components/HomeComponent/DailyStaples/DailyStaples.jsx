import React from 'react'
import './DailyStaples.css'
import breadpacket from '../../../assets/breadpacket.png'
import { TiStar } from "react-icons/ti";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import bisbox from '../../../assets/bisbox.png'
import choco from '../../../assets/choco.png'
import smallcake from '../../../assets/download.png'
import tin from '../../../assets/tin.png'
import chips from '../../../assets/chips.png' 
import cutlet from '../../../assets/cutlet.png'
import client from '../../../assets/client.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

const DailyStaples = () => {
  return (
    <div>
      <div className='dailyparent'>
        <div className='dailysubparent'>
          <div className='leftdiv'>
          <div className='headandimg2'>
                <h2>Your Daily Staples</h2>
                <div className='cakediv2'>
                    <div className='linediv1'></div>
                    <img src={smallcake} alt="" />
                    <div className='linediv1'></div>
                </div>
              </div>
            <div className='productcontent1'>
              <div className='productsrow11'>
                <div className='products1'>
                  <div className='details1'>
                    <div className='picdiv1'>
                      <img className='packet1' src={breadpacket} alt="" />
                    </div>
                    <h6>Muffets & Tuffets Whole Wheat Bread 400 g</h6>
                    {/* <p>Rs.30  <span>Rs.40</span></p> */}
                    <div className='starwhole1'>
                      {/* <div> */}
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <MdOutlineStarBorderPurple500 className='stars1'/>
                      {/* </div> */}
                      {/* <p>In Stock</p> */}
                    </div>
                    <p>1 KG</p>
                    <p>Rs. 80</p>
                    <div className='buttoncontent1'>
                      <p className='addbutton1'>Add</p>
                      <IoIosAdd className='addsign1' />
                    </div>
                  </div>
                </div>
                <div className='products1'>
                  <div className='details1'>
                    <div className='picdiv1'>
                      <img className='bisbox1' src={bisbox} alt="" />
                    </div>
                    <h6>Peanut Butter Bite Premium Butter Cookies 600 g</h6>
                    {/* <p>Rs.30  <span>Rs.40</span></p> */}
                    <div className='starwhole1'>
                      {/* <div> */}
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <MdOutlineStarBorderPurple500 className='stars1'/>
                      {/* </div> */}
                      {/* <p>In Stock</p> */}
                    </div>
                    <p>1 KG</p>
                    <p>Rs. 80</p>
                    <div className='buttoncontent1'>
                      <p className='addbutton1'>Add</p>
                      <IoIosAdd className='addsign1' />
                    </div>
                  </div>
                </div>
                <div className='products1'>
                  <div className='details1'>
                    <div className='picdiv1'>
                      <img className='choco1' src={choco} alt="" />
                    </div>
                    <h6>Fantasy Crunchy Choco Chip Cookies </h6>
                    {/* <p>Rs.30  <span>Rs.40</span></p> */}
                    <div className='starwhole1'>
                      {/* <div> */}
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <MdOutlineStarBorderPurple500 className='stars1'/>
                      {/* </div> */}
                      {/* <p>In Stock</p> */}
                    </div>
                    <p>1 KG</p>
                    <p>Rs. 80</p>
                    <div className='buttoncontent1'>
                      <p className='addbutton1'>Add</p>
                      <IoIosAdd className='addsign1' />
                    </div>
                  </div>
                </div>
                <div className='products1'>
                  <div className='details1'>
                    <div className='picdiv1'>
                      <img className='tin1' src={tin} alt="" />
                    </div>
                    <h6>Fresh Bread and Pastry Flour 200 g </h6>
                    {/* <p>Rs.30  <span>Rs.40</span></p> */}
                    <div className='starwhole1'>
                      {/* <div> */}
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <MdOutlineStarBorderPurple500 className='stars1'/>
                      {/* </div> */}
                      {/* <p>In Stock</p> */}
                    </div>
                    <p>1 KG</p>
                    <p>Rs. 80</p>
                    <div className='buttoncontent1'>
                      <p className='addbutton1'>Add</p>
                      <IoIosAdd className='addsign1' />
                    </div>
                  </div>
                </div>
                <div className='products1'>
                  <div className='details1'>
                    <div className='picdiv1'>
                      <img src={chips} alt="" />
                    </div>
                    <h6>SnackAmor Combo Pacck of Jowar Stick and Jowar Chips </h6>
                    {/* <p>Rs.30  <span>Rs.40</span></p> */}
                    <div className='starwhole1'>
                      {/* <div> */}
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <MdOutlineStarBorderPurple500 className='stars1'/>
                      {/* </div> */}
                      {/* <p>In Stock</p> */}
                    </div>
                    <p>1 KG</p>
                    <p>Rs. 80</p>
                    <div className='buttoncontent1'>
                      <p className='addbutton1'>Add</p>
                      <IoIosAdd className='addsign1' />
                    </div>
                  </div>
                </div>
                <div className='products1'>
                  <div className='details1'>
                    <div className='picdiv1'>
                      <img src={cutlet} alt="" />
                    </div>
                    <h6>Yumitos Chilli Sprinkled Potato Chips 100 g </h6>
                    {/* <p>Rs.30  <span>Rs.40</span></p> */}
                    <div className='starwhole1'>
                      {/* <div> */}
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <TiStar className='stars1' />
                        <MdOutlineStarBorderPurple500 className='stars1'/>
                      {/* </div> */}
                      {/* <p>In Stock</p> */}
                    </div>
                    <p>1 KG</p>
                    <p>Rs. 80</p>
                    <div className='buttoncontent1'>
                      <p className='addbutton1'>Add</p>
                      <IoIosAdd className='addsign1' />
                    </div>
                  </div>
                </div>
                </div>
                {/* <div className='productsrow22'> */}
                
                {/* </div> */}
              </div>
          </div>
          <div className='rightdiv'>
            <div className='firsthalf'>
              <div className='smfirsthalf'>
                <h6>FRESH EVERYDAY!</h6>
                <h3>Delicious  <span>Bread</span></h3>
                <p>Delicioud Bread and Brend new fresh bread.</p>
                <button className='buttonshopnow11'>Shop Now <span><FaArrowRightLong /></span></button>
              </div>
            </div>
            <div className='secondhalf'>
              <div className='smsecondhalf'>
                <div className='comment'>
                  <h3>Customer Comment</h3>
                  <div className='linediv11'></div>
                </div>
                <h5>We Care About Our Customer Experience</h5>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                <div className='customimg'>
                    <img className='clientimg' src={client} alt="" />
                    <div className='nameandprof'>
                      <h5>Tina Mcdonnale</h5>
                      <h6>Sale Manager</h6>
                    </div>
                </div>
              </div>
            </div>
          </div>  
        </div>            
      </div>
    </div>
  )
}

export default DailyStaples
