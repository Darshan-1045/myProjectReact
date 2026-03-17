import React from 'react'
import Section1 from './Components/section-1/Section1'
import Section2 from './Components/section-2/Section2'

const App = () => {
    const User = [
  {
    img:'https://images.unsplash.com/photo-1480548004877-593316be2bd5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    intro:"Modern skyscrapers rise high above the city, showing human creativity, engineering skills, and architectural beauty.",
    tag:"Beautiful",
    color:"seagreen"
  },
  {
    img:'https://images.unsplash.com/photo-1507110230240-6e2d230fd528?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpcmF0JTIwa29obGl8ZW58MHx8MHx8fDA%3D',
    intro:"Ancient stone buildings stand proudly in the town, reminding everyone about history and old traditions.",
    tag:"Wonderful",
    color:"crimson"
  },
  {
    img:'https://images.unsplash.com/photo-1516108317508-6788f6a160e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpcmF0JTIwa29obGl8ZW58MHx8MHx8fDA%3D',
    intro:"Lorem ipsum dolor sit amet, consectetur it will adipisicing elit. Ipsa,the impedit one of the most iconic.",
    tag:"Beautiful",
    color:"deeppink"
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww',
    intro:"Green trees, flowing rivers, and colorful flowers create beautiful nature scenes that calm the mind. 🌿",
    tag:"Natural",
    color:"pink"
  },
  {
    img:'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww',
    intro: "A deer peacefully eats green grass in wide grasslands with tall mountains rising beautifully in background. 🦌🏔️",
    tag:"Natural",
    color:"slateblue"
  }
];
  return (
    <div>
      <Section1 users={User}/>
      <Section2 />
    </div>
  )
}

export default App