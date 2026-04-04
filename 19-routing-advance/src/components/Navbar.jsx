import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 px-8 py-4 items-center'>
      <h2 className='text-2xl font-bold'>JP Masters</h2>
      <div className='flex gap-12'> 

        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/product'>Product</Link>
        <Link className='text-lg font-medium' to='/contact'>Contact</Link>
        <Link className='text-lg font-medium' to='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar