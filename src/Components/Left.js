import React from 'react'
import Cube from './Cube'
import cloud from '../assets/cloud.jpg'
import Mail from './Mail'

const Left = () => {
    return(
      <div className='left-container'>  
        <div>
          <img src={cloud} alt="" />
        </div>
        <Cube/>
        <Cube/>
        <Cube/>
        <Cube/>
        <Cube/>
        <Cube/>
        <Mail/>
      </div>
    )
  }

export default Left
