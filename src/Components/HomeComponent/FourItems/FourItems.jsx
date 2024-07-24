import React from 'react'
import './FourItems.css'

const FourItems = () => {
  return (
    <div>
      <div className='fouritemsparent'>
        <div className='subparentt'>
            <div className='firsttwo'>
                <div className='firstone'>
                    <div className='smallfirstone'>
                        <div className='small'>
                            <p className='offtag'>5% OFF</p>
                            <h4>New Items</h4>
                            <h6>Daily Essentials</h6>
                        </div>
                    </div>
                </div>
                <div className='secondone'>
                    <div className='smallfirstone'>
                        <div className='small'>
                            <p className='offtag'>5% OFF</p>
                            <h4>Save More</h4>
                            <h6>Fresh Toast Rusk</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lasttwo'>
                <div className='lastfirst'>
                    <div className='smallfirstone'>
                        <div className='small'>
                            <p className='offtag'>5% OFF</p>
                            <h4>Fresh Everyday</h4>
                            <h6>Delivered @ Home</h6>
                        </div>
                    </div>
                </div>
                <div className='lastsecond'>
                    <div className='smallfirstone'>
                        <div className='small'>
                            <p className='offtag'>5% OFF</p>
                            <h4>Hot Deals</h4>
                            <h6>Fresh Cake</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}


export default FourItems
