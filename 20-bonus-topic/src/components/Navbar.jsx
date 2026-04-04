import React from 'react'

const Navbar = (props) => {

  const change = () => {
     props.setTheme('dark')
  }
  return (
    <div>
      <button onClick={change}>Change Theme</button>
    </div>
  )
}

export default Navbar