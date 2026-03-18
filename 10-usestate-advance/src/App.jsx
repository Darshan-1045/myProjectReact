import React , {useState} from 'react'

const App = () => {
  
  const people = [
  { id: 1, name: "Deepak" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" },
  { id: 4, name: "Rohit" },
  { id: 5, name: "Virat" },
  { id: 6, name: "Darshan" },
  { id: 7, name: "Prakash" },
  { id: 8, name: "Kiran" },
  { id: 9, name: "Arjun" },
  { id: 10, name: "Manoj" },
  { id: 11, name: "Suresh" },
  { id: 12, name: "Ramesh" },
  { id: 13, name: "Anil" },
  { id: 14, name: "Vijay" },
  { id: 15, name: "Naveen" }
];

const [names, setNames] = useState([])


const insert = () => {
  setNames(prev => [...prev,people[prev.length]])    
}
   

  return (
    <div>
      {
        names.map((val) => (
         <p key={val.id}> {val.id}{ ' : ' }{val.name}</p>
        ))
      }
      <button onClick={insert}>Click</button> 
      

    </div>
  )
}

export default App

