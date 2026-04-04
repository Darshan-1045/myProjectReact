import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <div className='NAV'>
        <h2>JP-Masters</h2>
        <div className='links'>
          
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>

        </div>
      </div>
    </div>
  )
}

export default Nav