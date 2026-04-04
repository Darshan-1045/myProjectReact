import React, { useContext } from 'react'
import { themeDataContext } from '../context/Themecontext';

const Button = () => {

const [theme,setTheme] = useContext(themeDataContext)

 const change =  () => {
  if(theme == 'dark'){
    setTheme('light');
  }else{
    setTheme('dark');
  }
     
 }

  return (
    <div>
      <button onClick={change}>Change Theme</button>
    </div>
  )
}

export default Button