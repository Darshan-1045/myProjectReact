import React, { useContext } from 'react'
import Nav2 from './Nav2'
import Button from './Button'
import { themeDataContext } from '../context/Themecontext'

const Nav = () => {

  const [theme] = useContext(themeDataContext)

  return (
    <div>
      <div className={theme}>
        <h1>JP Masters</h1>
        <Nav2 />
      </div>
      <Button />
    </div>
  )


}

export default Nav 