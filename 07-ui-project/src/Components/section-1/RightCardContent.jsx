import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
        <h2 className='bg-white text-2xl font-medium h-10 w-10 rounded-full flex items-center justify-center'>{props.num}</h2>
        <div>
          <p className='text-shadow-xl text-lg leading-normal pb-6 text-white'>{props.intro}</p>
          <div>
            <button  style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
            <button  style={{backgroundColor:props.color}} className='text-white font-medium px-4 py-3 rounded-full'><i class="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent