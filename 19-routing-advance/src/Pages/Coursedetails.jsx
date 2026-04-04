import React from 'react'
import { useParams } from 'react-router-dom'

const Coursedetails = () => {

   const params = useParams(); 
   console.log(params.id);
  return (
    <div>
      <h3>{params.id} Courses Details page</h3>
    </div>
  )
}

export default Coursedetails