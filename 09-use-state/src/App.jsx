import React, {useState} from 'react'

const App = () => {
  

  const [num, setNUM] = useState(0);

  const increaseNum = () => {
    setNUM(num+1);
    }
  const decreaseNum = () => {
    setNUM(num-1);
    }
  const jumpBY = () => {
    setNUM(num+5);
    }
  const Multiply = () => {
    setNUM(num*5);
    }
  

  return (
    <div> 
      <div className='count'> 
       <p className='p'>{ num }</p>  </div>
     <button onClick={increaseNum}>Increase</button>
     <button onClick={decreaseNum}>Decrease</button>
     <button onClick={jumpBY}>Jump BY</button>
     <button onClick={Multiply}>Multiply</button>
    </div>
  )
}

export default App