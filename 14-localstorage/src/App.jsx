import React from 'react'

const App = () => {

  const user = {
    name:'darshan P',
    age:28,
    place:'nayaknahatty'
  };

  localStorage.setItem('user',JSON.stringify(user));
  
  let userDetails = localStorage.getItem( 'user');

  console.log(JSON.parse(userDetails));

  return (
    <div>Welcome to Local storage</div> 
  )
}

export default App