import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

  const navigate = useNavigate()

  return (
    <div className='px-3 py-2 bg-cyan-700'>

      <button onClick={() => {
        navigate('/')
      }} className='font-medium px-3 py-2 m-1 bg-amber-300 rounded cursor-pointer active-scale'>Return to Home</button>

      <button onClick={() => {
        navigate(-1)
      }} className='font-medium px-3 py-2 m-1 bg-amber-300 rounded cursor-pointer active-scale'>Back</button>

      <button onClick={() => { 
        navigate(+1)
      }} className='font-medium px-3 py-2 m-1 bg-amber-300 rounded cursor-pointer active-scale'>Next</button>

    </div>
  )
}

export default Navbar2