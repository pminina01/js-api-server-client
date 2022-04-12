import React from 'react'
import styles from './Header.module';
import { NavLink, useHistory } from 'react-router-dom'
import authService from '../../services/auth.service'

function Header() {
  const history = useHistory()
  const handleLogout = () => {
    authService.logout()
    history.replace('/')
  }

  return (
    <header className={styles.header}>
      <img src='../../assets/logo.png' className={styles.logo} />
      <h1 className={styles.text}>
        Hometask #2
      </h1>
      
      {!authService.isAuthorized() ? (
        <div className={styles.navbar}>
          <NavLink to="/" className={styles.button}>Home</NavLink>
          <NavLink to="/login" className={styles.button}>Login</NavLink>
          <NavLink to="/register" className={styles.button}>Register</NavLink>          
        </div>
      ) : (
        <div className={styles.navbar}>
          <NavLink to="" className={styles.button} onClick={handleLogout}>
            Logout
          </NavLink>
        </div>
      )}
      
    </header>
  )
}

export default Header
