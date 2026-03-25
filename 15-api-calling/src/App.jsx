import axios from 'axios'
import { useState } from 'react'


const App = () => {

  const [Data, setData] = useState([])

    const apical = async () =>  { 

      

      const response = await axios.get('https://picsum.photos/v2/list')

      console.log(response.data);

      setData(response.data);
     
  }
   
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={apical}>Click</button>
      <div>
        {Data.map((val,idx) =>{
          return <div key={idx}>
            <h1>{val.author} {idx+1}</h1>
            </div>
        })
        }
      </div>
    </div>
  )
}

export default App