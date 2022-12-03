import React from 'react';
import './Featured.css'

export const Featured = () => (
  <div className='featured'>
    <div className="featuredItem">
      <img src={require('../images/f2.webp')} alt="" className="featuredImg" />
      <div className="featuredTitles">
        <h1>Doblin</h1>
        <h2>125 properties</h2>
      </div>
    </div>

    <div className="featuredItem">
      <img src={require('../images/f1.webp')} alt="" className="featuredImg" />
      <div className="featuredTitles">
        <h1>Doblin</h1>
        <h2>125 properties</h2>
      </div>
    </div>

    <div className="featuredItem">
      <img src={require('../images/f3.webp')} alt="" className="featuredImg" />
      <div className="featuredTitles">
        <h1>Doblin</h1>
        <h2>125 properties</h2>
      </div>
    </div>
  </div>
)
