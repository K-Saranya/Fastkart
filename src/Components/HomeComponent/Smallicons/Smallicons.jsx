import React from 'react'
import './Smallicons.css'
import cake from '../../../assets/cake.svg'
import sandwich from '../../../assets/sandwich.svg'
import pie from '../../../assets/pie.svg'
import bread from '../../../assets/bread.svg'
import biscuits from '../../../assets/biscuits.svg'
import cookies from '../../../assets/cookies.svg'

const Smallicons = () => {
  return (
    <div>
      <div className='iconparent'>
        <div className='subparent'>
            <div className='smallimgdiv'>
                <div className='snacks'>
                    <img src={cake} alt="" />
                    <p>Cake</p>
                </div>
                <div className='snacks'>
                    <img src={sandwich} alt="" />
                    <p>Sandwich</p>
                </div>
                <div className='snacks'>
                    <img src={cookies} alt="" />
                    <p>Cookies</p>
                </div>
                <div className='snacks1'>
                    <img src={pie} alt="" />
                    <p>Pie</p>
                </div>
                <div className='snacks1'>
                    <img src={bread} alt="" />
                    <p>Bread</p>
                </div>
                <div className='snacks1'>
                    <img src={biscuits} alt="" />
                    <p>Biscuits</p>
                </div>
            </div>        
        </div>
      </div>
    </div>
  )
}

export default Smallicons
