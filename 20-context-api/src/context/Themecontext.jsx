import React, { createContext, useState } from 'react'

export const themeDataContext = createContext();

const Themecontext = (props) => {

  const [theme, setTheme] = useState('dark')

  return (
    <div>
     <themeDataContext.Provider value={[theme,setTheme]}>
        {props.children}
     </themeDataContext.Provider>
    </div>
  )
}

export default Themecontext