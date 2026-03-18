import React from 'react'

const App = () => {
 function submit(val){
    val.preventDefault();
    console.log("form is submitted");
  }
  return (
    <div>
      <form onSubmit={(val) => {
        submit(val)
      }}>
        <input type="text" placeholder='Enter your Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App