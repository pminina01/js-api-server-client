import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import authService from '../services/auth.service'

function Login() {
  const history = useHistory()
  const [error, setError] = useState()
  const onSubmit = async ({ login, password }) => {
    // TODO call login from authService.
    // Use history.replace to home page if login successes
    // and set error state if error
    authService.login(login, password)
    .then(() => {history.replace('/')})
    .catch((error) => {console.log(error)})
  }

  return (
    <LoginForm onSubmit={onSubmit} buttonText="Sign in" title="Sign into account" error={error} />
  )
}

export default Login
