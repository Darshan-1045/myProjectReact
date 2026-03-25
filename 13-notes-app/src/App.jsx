import React, { useState } from 'react'

const App = () => {

const [heading, setHeading] = useState('')
const [details, setDetails] = useState('')

const [task, setTask] = useState([])

const submitHandler = (val) => {
  val.preventDefault();
  

  const copyTask = [...task];

  copyTask.push({heading,details});
  setTask(copyTask);

  setHeading('');
  setDetails('');
}

const deleteNote = (idx) => {
 const copyTask = [...task]
  copyTask.splice(idx,1);

  setTask(copyTask)
  

}

  return (
    <div className='h-screen lg:flex bg-black text-amber-50 ' >

      <form onSubmit={(val) => {
        submitHandler(val)
      
      }} className='flex gap-5 items-start  flex-col p-10 lg:w-1/2'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>
       
       {/* first input of notes */}
        <input className='px-5 py-2 border-2 rounded w-full font-medium outline-none' 
        type="text" 
        placeholder='Enter the Heading'
        value={heading}
        onChange={(val) => {
           setHeading(val.target.value)
        }}/>
        
        {/* second input of the notes */}
        <textarea className='h-30 px-5 py-2 border-2 rounded w-full font-medium outline-none' 
        type="text" 
        placeholder='Write details Here' 
        value={details}
        onChange={(val) => {
          setDetails(val.target.value);
        }}/>

        <button className='px-5 py-2 border-2 rounded w-full bg-amber-100 text-black outline-none active:scale-75'>Submit</button>
       
        
      </form>  
      <div className=' flex-wrap p-10 bg-gray-950 lg:w-1/2 gap-7 lg:border-l-2'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map((val,idx) => {
            return <div key={idx} className="h-80 bg-cover w-60 rounded-2xl text-black bg-amber-50 py-6 px-4 flex flex-col justify-between">
              <h2 className='leading-tight text-3xl font-bold  '>{val.heading}</h2>
              <p className='mt-3 leading-tight text-gray-600 '>{val.details}</p>
              <button onClick={() => {
                deleteNote(idx)
              }} className='mt-5 border-2 rounded-2xl bg-amber-100 cursor-pointer active:scale-95'>Delete</button>

            </div>
          })}
                 
       </div>
      </div> 
    </div>
  )
}

export default App