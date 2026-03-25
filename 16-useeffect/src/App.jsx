import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  
  const [a, setA] = useState(0)
  const [b, setB] = useState(100)

  const changeA = () => {
    console.log('A is changing')
  }
  const changeB= () => {
    console.log('B is changing')
  }

  useEffect(() => {
    changeA();
    },[a])
  useEffect(() => {
    changeB();
    },[b])
  
  return (
    <div className='bg-black text-white h-screen'>
      <div >
        <h1 className='text-6xl'>{a} {b}</h1>

        <div className='flex flex-wrap gap-5 mt-4'>

           <button className='bg-white text-black py-2 px-3 rounded' onClick={() => {
            setA(a+1)
           }}>Increase</button>

           <button className='bg-white text-black py-2 px-3 rounded gap-3' onClick={() => {
            setB(b-1)
           }}>Decrease</button>
        </div>
      </div>  
      
      
    </div>
  )
}

export default App;