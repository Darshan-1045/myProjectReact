import React from 'react'
import Rightcard from './Rightcard'
import RightCardContent from './Rightcard'

const RightContent = (props) => {
   


  return (
    <div id='right' className='h-full p-6 w-2/3 flex flex-nowrap justify-between gap-5 overflow-x-auto'>
     {
      props.users.map((value,index) => {
        return <div>
         <Rightcard Image={value.img} tag={value.tag} num={index+1} intro={value.intro} color={value.color}/> 
        </div>
      })
     }

    </div>
  )
}

export default RightContent