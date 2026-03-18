import React, { useState } from 'react'

const App = () => {

 
//  const [title, setTitle] = useState('')

//  function submit(val){
//     val.preventDefault();
//     console.log("form is submitted by",title);
//     setTitle('')
//   }
   const [title, setTitle] = useState('')

   function change(val) {
    val.preventDefault();
    console.log('form is submitted by',title);

    setTitle('')

   }



  return (
    <div>
      {/* <form onSubmit={(val) => {
        submit(val)
      }}>
        <input type="text" 
        placeholder='Enter your Name' 
        value={title}
        onChange={(val)=>{ setTitle(val.target.value)}}/>
        <button>Submit</button>
      </form> */}
      <form onSubmit={(val) => {change(val)}}> 
        <input type="text" placeholder='Enter your Name' value={title} onChange={(ele) => {setTitle(ele.target.value)}}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App