import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='rounded-4xl ml-10 mr-10 px-25 pt-5 pb-10 h-[80vh] bg-amber-50 flex items-center gap-10'>
      <LeftContent />
      <RightContent users={props.users}/>
       </div>
  )
}

export default Page1Content