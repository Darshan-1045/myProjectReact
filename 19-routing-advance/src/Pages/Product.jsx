import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-end px-4 py-4 gap-10 mr-5' >
        <Link className='text-2xl font-bold' to='/product/men' >Men</Link>
        <Link className='text-2xl font-bold' to='/product/women' >Women</Link>
        <Link className='text-2xl font-bold' to='/product/kids' >Kids</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product