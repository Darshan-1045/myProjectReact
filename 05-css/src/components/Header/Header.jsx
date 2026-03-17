import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
       Welcome to React CSS
      <h1 className={styles.Header}>Learn React</h1>
      <button className={styles.btn}>Login</button>

    </div>
  )
}

export default Header