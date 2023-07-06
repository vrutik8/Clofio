import React from 'react'
import Button from '../Components/Button'
import Table from '../Components/Table'

const Body = () => {
    return(
      <div className='body-container'>
        <div className="content-container">
        <div className="content-heading">
          <h3>Hii , Jennie Moss</h3>
          <h6>Last Scanned on March 20th,2023 11:30pm IST</h6>
          </div>
          <div className="card-container">
            <Button/>
            <Button />
            <Button />
            </div>
            <div className="table-container">
              <Table/>
              <Table/>
              <Table/>
            </div>
       
           
          </div>
      </div>
    )
  }

export default Body