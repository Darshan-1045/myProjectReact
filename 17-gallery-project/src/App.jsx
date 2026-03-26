import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  
  const [page, setPage] = useState(1)


  const getData = async () => {
    
   const getData = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=21`)

    setUserData(getData.data)
  }

   useEffect(() => {
    getData();
   },[page])
   
  let userDisplay = <h1 className='text-gray-400 text-4xl absolute top-4/10 left-40/100 translate-x-1/2 translate-y-1/2'>Loading....</h1>;

  if(userData.length > 0){
    userDisplay = userData.map(function(Val,idx) {
      return  <div key={idx}>
       <a href={Val.url} target='_blank'>
         <div className='h-45 w-47 rounded overflow-hidden'>
          <img className='h-full w-full object-cover' src={Val.download_url} alt="" />
        </div>
        <h2 className='font-bold text-lg'>{Val.author}</h2>
       </a>
      </div>
    })
  }

  return (
    <div className='bg-gray-800 h-screen overflow-auto text-white '>

     <div className='m-5 flex flex-wrap gap-6 mb-15'>
      {userDisplay}
     </div>

     <div className='flex justify-center gap-6 items-center m-5'>

      <button onClick={() => {
        if(page>1){
        setPage(page-1);
        }
      }} className='bg-amber-500 text-black px-6 py-2 rounded cursor-pointer active:scale-75'>Prev</button>


      <h4 className='bg-white text-2xl font-bold text-black px-4 py-2 rounded-full'> Page {page} </h4>
      
      <button onClick={() => {
        setPage(page+1);
      }} className='bg-amber-500 text-black px-6 py-2 rounded cursor-pointer active:scale-75'>Next</button>

     </div>

    </div>
  )
}

export default App