import React from 'react'
import './NewsLetter.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import message from '../../../assets/message.svg'

const NewsLetter = () => {
  return (
    <div>
      <div className='newsdiv'>
        <div className='subnewsdiv'>
            <div className='childnews'>
                <div className='leftcondiv'>
                    <h2>Join Our Newsletter And Get...</h2>
                    <h5>$20 discount for your first order</h5>
                    <div className='emaildiv'>
                        <HiOutlineMail className='mailicon' />
                        <input type="text" placeholder='Enter your Email' />
                        <button className='subsbutton'>Subscribe <FaArrowRightLong /></button>
                    </div>
                </div>
                <div className='rightcondiv'>
                  <img className='message' src={message} alt="" />
                </div>
            </div>
        </div>  
      </div>
    </div>
  )
}

export default NewsLetter
