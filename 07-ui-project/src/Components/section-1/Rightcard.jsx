import React from 'react'
import "remixicon/fonts/remixicon.css";
import RightCardContent from './RightCardContent';

const Rightcard = (props) => {
  
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-65 bg-white rounded-4xl '> 
      <img className='h-full w-full object-cover rounded-4xl' src={props.Image} alt="" />

      <RightCardContent tag={props.tag} num={props.num} intro={props.intro} color={props.color}/>
     
    </div>
  )
}

export default Rightcard