import React from 'react'

const sideBar = ({showFirmHandler,showProductHandler}) => {
  return (
    <div className='sideBarSection'>
        <ul>
            <li onClick={showFirmHandler}>Add Firm</li>
            <li onClick={showProductHandler}>Add Product</li>
            <li>All Products</li>
            <li>User Details</li>
        </ul>
    </div>
  )
}

export default sideBar