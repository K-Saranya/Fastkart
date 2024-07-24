import React from 'react'
import './TopSave.css'
import smallcake from '../../../assets/download.png'
import { LuClock } from "react-icons/lu";
import breadpacket from '../../../assets/breadpacket.png'
import { TiStar } from "react-icons/ti";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import bisbox from '../../../assets/bisbox.png'
import choco from '../../../assets/choco.png'
import tin from '../../../assets/tin.png'
import chips from '../../../assets/chips.png' 
import cutlet from '../../../assets/cutlet.png'
import cake1 from '../../../assets/cake1.jpg'
import cake2 from '../../../assets/cake2.jpg'
import cake3 from '../../../assets/cake3.jpg'
import cake4 from '../../../assets/cake4.jpg'
import cake5 from '../../../assets/cake5.jpg'
import cake6 from '../../../assets/cake6.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

const TopSave = () => {
  return (
    <div>
      <div className='fulltopsave'>
        <div className='smalltopsave'>
          <div className='firstpart'>
            <div className='topcontent'>
              <div className='headandimg'>
                <h2>Top Save Today</h2>
                <div className='cakediv'>
                    <div className='linediv1'></div>
                    <img src={smallcake} alt="" />
                    <div className='linediv1'></div>
                </div>
              </div>
              <div className='expires'>
                <LuClock />
                <p>Expires in:</p>
                <p>14</p>
                <p>:</p>
                <p>23</p>
                <p>:</p>
                <p>58</p>
                <p>:</p>
                <p>08</p>
              </div>
            </div>
            <div className='productcontent'>
              <div className='productsrow1'>
                <div className='products'>
                  <div className='details'>
                    <div className='picdiv'>
                      <img className='packet' src={breadpacket} alt="" />
                    </div>
                    <h6>Muffets & Tuffets Whole Wheat Bread 400 g</h6>
                    <p>Rs.30  <span>Rs.40</span></p>
                    <div className='starwhole'>
                      <div>
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <MdOutlineStarBorderPurple500 className='stars'/>
                      </div>
                      <p>In Stock</p>
                    </div>
                    <div className='buttoncontent'>
                      <p className='addbutton'>Add</p>
                      <IoIosAdd className='addsign' />
                    </div>
                  </div>
                </div>
                <div className='products'>
                  <div className='details'>
                    <div className='picdiv'>
                      <img className='bisbox' src={bisbox} alt="" />
                    </div>
                    <h6>Peanut Butter Bite Premium Butter Cookies 600 g</h6>
                    <p>Rs.30  <span>Rs.40</span></p>
                    <div className='starwhole'>
                      <div>
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <MdOutlineStarBorderPurple500 className='stars'/>
                      </div>
                      <p>In Stock</p>
                    </div>
                    <div className='buttoncontent'>
                      <p className='addbutton'>Add</p>
                      <IoIosAdd className='addsign' />
                    </div>
                  </div>
                </div>
                <div className='products'>
                  <div className='details'>
                    <div className='picdiv'>
                      <img className='choco' src={choco} alt="" />
                    </div>
                    <h6>Fantasy Crunchy Choco Chip Cookies </h6>
                    <p>Rs.30  <span>Rs.40</span></p>
                    <div className='starwhole'>
                      <div>
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <MdOutlineStarBorderPurple500 className='stars'/>
                      </div>
                      <p>In Stock</p>
                    </div>
                    <div className='buttoncontent'>
                      <p className='addbutton'>Add</p>
                      <IoIosAdd className='addsign' />
                    </div>
                  </div>
                </div>
                
                <div className='products'>
                  <div className='details'>
                      <div className='picdiv'>
                        <img className='tin' src={tin} alt="" />
                      </div>
                      <h6>Fresh Bread and Pastry Flour 200 g </h6>
                      <p>Rs.30  <span>Rs.40</span></p>
                      <div className='starwhole'>
                        <div>
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <MdOutlineStarBorderPurple500 className='stars'/>
                        </div>
                        <p>In Stock</p>
                      </div>
                      <div className='buttoncontent'>
                        <p className='addbutton'>Add</p>
                        <IoIosAdd className='addsign' />
                      </div>
                    </div>
                </div>
                <div className='products'>
                  <div className='details'>
                      <div className='picdiv'>
                        <img className='chips' src={chips} alt="" />
                      </div>
                      <h6>SnackAmor Combo Pacck of Jowar Stick and Jowar Chips </h6>
                      <p>Rs.30  <span>Rs.40</span></p>
                      <div className='starwhole'>
                        <div>
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <MdOutlineStarBorderPurple500 className='stars'/>
                        </div>
                        <p>In Stock</p>
                      </div>
                      <div className='buttoncontent'>
                        <p className='addbutton'>Add</p>
                        <IoIosAdd className='addsign' />
                      </div>
                    </div>
                </div>
                <div className='products'>
                  <div className='details'>
                      <div className='picdiv'>
                        <img className='cutlet' src={cutlet} alt="" />
                      </div>
                      <h6>Yumitos Chilli Sprinkled Potato Chips 100 g </h6>
                      <p>Rs.30  <span>Rs.40</span></p>
                      <div className='starwhole'>
                        <div>
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <MdOutlineStarBorderPurple500 className='stars'/>
                        </div>
                        <p>In Stock</p>
                      </div>
                      <div className='buttoncontent'>
                        <p className='addbutton'>Add</p>
                        <IoIosAdd className='addsign' />
                      </div>
                    </div>
                </div>
                {/* <div className='products'>
                  <div className='details'>
                    <div className='picdiv'>
                      <img className='packet' src={breadpacket} alt="" />
                    </div>
                    <h6>Muffets & Tuffets Whole Wheat Bread 400 g</h6>
                    <p>Rs.30  <span>Rs.40</span></p>
                    <div className='starwhole'>
                      <div>
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <MdOutlineStarBorderPurple500 className='stars'/>
                      </div>
                      <p>In Stock</p>
                    </div>
                    <div className='buttoncontent'>
                      <p className='addbutton'>Add</p>
                      <IoIosAdd className='addsign' />
                    </div>
                  </div>
                </div>
                <div className='products'>
                  <div className='details'>
                    <div className='picdiv'>
                      <img className='packet' src={breadpacket} alt="" />
                    </div>
                    <h6>Muffets & Tuffets Whole Wheat Bread 400 g</h6>
                    <p>Rs.30  <span>Rs.40</span></p>
                    <div className='starwhole'>
                      <div>
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <MdOutlineStarBorderPurple500 className='stars'/>
                      </div>
                      <p>In Stock</p>
                    </div>
                    <div className='buttoncontent'>
                      <p className='addbutton'>Add</p>
                      <IoIosAdd className='addsign' />
                    </div>
                  </div>
                </div>
                <div className='products'>
                  <div className='details'>
                    <div className='picdiv'>
                      <img className='packet' src={breadpacket} alt="" />
                    </div>
                    <h6>Muffets & Tuffets Whole Wheat Bread 400 g</h6>
                    <p>Rs.30  <span>Rs.40</span></p>
                    <div className='starwhole'>
                      <div>
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <TiStar className='stars' />
                        <MdOutlineStarBorderPurple500 className='stars'/>
                      </div>
                      <p>In Stock</p>
                    </div>
                    <div className='buttoncontent'>
                      <p className='addbutton'>Add</p>
                      <IoIosAdd className='addsign' />
                    </div>
                  </div>      
                </div> */}
              </div>
            
                {/* <div className='products'>
                  <div className='details'>
                      <div className='picdiv'>
                        <img className='tin' src={tin} alt="" />
                      </div>
                      <h6>Fantasy Crunchy Choco Chip Cookies </h6>
                      <p>Rs.30  <span>Rs.40</span></p>
                      <div className='starwhole'>
                        <div>
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <MdOutlineStarBorderPurple500 className='stars'/>
                        </div>
                        <p>In Stock</p>
                      </div>
                      <div className='buttoncontent'>
                        <p className='addbutton'>Add</p>
                        <IoIosAdd className='addsign' />
                      </div>
                    </div>
                </div>
                <div className='products'>
                  <div className='details'>
                      <div className='picdiv'>
                        <img className='tin' src={tin} alt="" />
                      </div>
                      <h6>Fantasy Crunchy Choco Chip Cookies </h6>
                      <p>Rs.30  <span>Rs.40</span></p>
                      <div className='starwhole'>
                        <div>
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <MdOutlineStarBorderPurple500 className='stars'/>
                        </div>
                        <p>In Stock</p>
                      </div>
                      <div className='buttoncontent'>
                        <p className='addbutton'>Add</p>
                        <IoIosAdd className='addsign' />
                      </div>
                    </div>
                </div>
                <div className='products'>
                  <div className='details'>
                      <div className='picdiv'>
                        <img className='tin' src={tin} alt="" />
                      </div>
                      <h6>Fantasy Crunchy Choco Chip Cookies </h6>
                      <p>Rs.30  <span>Rs.40</span></p>
                      <div className='starwhole'>
                        <div>
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <TiStar className='stars' />
                          <MdOutlineStarBorderPurple500 className='stars'/>
                        </div>
                        <p>In Stock</p>
                      </div>
                      <div className='buttoncontent'>
                        <p className='addbutton'>Add</p>
                        <IoIosAdd className='addsign' />
                      </div>
                    </div>
                </div> */}
             
              <div className='headandimg1'>
                  <h2>All Kinds Of Cakes</h2>
                  <div className='cakediv1'>
                      <div className='linediv1'></div>
                      <img src={smallcake} alt="" />
                      <div className='linediv1'></div>
                  </div>
              </div>
              <div className='cakess'>
                  <div className='twocolcakes'>
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
                  
                  {/* <div className='twocolcakes'> */}
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
                  {/* </div> */}
                  {/* <div className='twocolcakes'> */}
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
                  </div>
                  </div>
              {/* </div> */}
            </div>
          </div>
          <div className='secondpart'>
            <div className='subsecondpart'>
              <h6>SEAFOOD</h6>
              <div className='brand'>
                <h1>SPECIAL  <span>BRAND</span></h1>  
                <div className='borderdiv'></div>
              </div>
              <p>Special offer on the discount very hungry cake and sweets</p>
              <div className='uptooff'>
                <h4>UP TO</h4>
                <h2>50%</h2>
                <h3>OFF</h3>
              </div>
              <button className='buttonshopnow1'>Shop Now <span><FaArrowRightLong /></span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSave
