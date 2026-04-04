import React, { useContext } from 'react'
import { themeDataContext } from '../context/Themecontext'

const Nav2 = () => {
   
const data = useContext(themeDataContext)
  return (
    <div className='nav2'>
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Product</h3>
      <h3>Contact</h3>
      <h3>{data}</h3>
    </div>
  )
}

export default Nav2