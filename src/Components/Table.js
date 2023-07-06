import React from 'react'

const Table = () => {
    return(
     <div className='table-contain'>
      <div className="caption">
        Buckets you own 
      </div>
      <hr></hr>
      <div className='content-detail'>
        <h3>Name</h3>
        <h3>Budget</h3>
        <h3>Spend</h3>
        <h3>Forwcast</h3>
      </div>
      <hr></hr>
  
      <div className='content-detail-name'>
        <h3>ACME</h3>
        <h3>$20000</h3>
        <h3>$20000</h3>
        <h3>$20000</h3>
      </div>
  
      <div className='content-detail-name'>
        <h3>$20000</h3>
        <h3>$20000</h3>
        <h3>$20000</h3>
        <h3>$20000</h3>
      </div>
  
      </div>
    )
  }

export default Table