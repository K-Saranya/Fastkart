import React from 'react'
import './Nav.css'
import flag from '../../assets/flag1.jpg'
import { FaAngleDown } from "react-icons/fa6";
import { PiLineVertical } from "react-icons/pi";
import logo from '../../assets/logo.png'
import { CiLocationOn } from "react-icons/ci";
import { GrFormSearch } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BsLightningCharge } from "react-icons/bs";

const Nav = () => {
  return (
    <div>
      <div className='maindiv'>
        <div className='blacknav'>
            <div className='blackcontent'>
                <p>Something you love is now on sale!  <a href="">Buy Now!</a></p>
                <div className='language'>
                    <img className='flag' src={flag} alt="" />
                    <p>English</p>
                    <FaAngleDown />
                    <PiLineVertical className='line'/>
                    <p>USD</p>
                    <FaAngleDown />
                </div>
            </div>
        </div>
        <div className='fastnav'>
            <div className='smallfastnav'>
                <img className='logoimg' src={logo} alt="" />
                <div className='location'>
                    <CiLocationOn className='loc' />
                    <p>Your Location</p>
                    <FaAngleDown />
                </div>
                <div className='searchbar'>
                    <p>I'm searching for...</p>
                    <GrFormSearch className='search'/>
                </div>
                <div className='fouricons'>
                    <FiPhoneCall />
                    <PiLineVertical className='line1'/>   
                    <FaRegHeart />
                    <PiLineVertical className='line1'/>   
                    <FiShoppingCart />
                    <PiLineVertical className='line1'/>   
                    <FiUser />
                </div>  
            </div>
        </div>
        <div className='categories'>
          <div className='smallcategories'>
            <div className='forgap'>
            <div className='categorybox'>
              <CgMenuLeftAlt className='menuicon' />
              <p>All Categories</p>
            </div>
            <div className='menus'>
                <div className='menusname'>
                    <p>Home</p>
                    <FaAngleDown />
                </div>
                <div className='menusname'>
                    <p>Shop</p>
                    <FaAngleDown />
                </div>
                <div className='menusname1'>
                    <p>Product</p>
                    <FaAngleDown />
                </div>
                <div className='menusname2'>
                    <p>Mega Menu</p>
                    <FaAngleDown />
                </div>
                <div className='menusname'>
                    <p>Blog</p>
                    <FaAngleDown />
                </div>
                <div className='menusname1'>
                    <p>Pages</p>
                    <FaAngleDown />
                </div>
                <div className='menusname'>
                    <p>Seller</p>
                    <FaAngleDown />
                </div>
            </div>  
            </div>            
            <div className='thunder'>
              <BsLightningCharge />
            </div>
          </div>
        </div>
      </div>
      <div className='tabnav'>
        <div className='blacknav'>
            <div className='blackcontent'>
                <p>Something you love is now on sale!  <a href="">Buy Now!</a></p>
                <div className='language'>
                    <img className='flag' src={flag} alt="" />
                    <p>English</p>
                    <FaAngleDown />
                    <PiLineVertical className='line'/>
                    <p>USD</p>
                    <FaAngleDown />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
