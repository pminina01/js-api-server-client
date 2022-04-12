import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import authService from '../services/auth.service'

function Register() {
  const history = useHistory()
  const [error, setError] = useState()
  const onSubmit = async ({ login, password }) => {
    // TODO call register from authService.
    // Use history.replace to login page if register successes
    // and set error state if error
    authService.register(login, password)
    .then(() => {history.replace('/login')})
    .catch((error) => {console.log(error)})
  }

  return (
      <LoginForm onSubmit={onSubmit} buttonText="Register" title="Create account" error={error} />
  )
}

export default Register
