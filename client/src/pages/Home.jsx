import React, { useEffect, useState } from 'react'
import authService from '../services/auth.service'
import userService from '../services/user.service'

function Home() {
  // TODO create state for (users, setUsers), (error, setError), (loading, setLoading)
  // try to understand which initial values required
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (authService.isAuthorized()) {
      // Run data fetching in this effect
      // TODO set loading state to true
      setLoading(true)
      // TODO call 'userService' to start data fetching, set 'Some error happened' to error state in catch block,
      // set loading state to false in finally block
      // set users state in then block.
      // ---- promise.then((data) => {}).catch((error) => {}).finally(() => {}) ====
      userService.getUsers()
          .then((data) => { setUsers(data)})
          .catch((error) => {
              console.log(error)
              setError('Some error happened: ', error)})
            .finally(() => {setLoading(false)})
    } else {
      // TODO reset users state
      setUsers([])

    }
  }, [authService.isAuthorized()])

  return (
    <div>
      { authService.isAuthorized() ? (
          <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {users.map((user) => (
              // TODO extend template to display all data (besides id)
              <div key={user.id}>
                <ul>
                  <ol><b>Avatar:</b> <img src={user.avatar} alt="ava" /> </ol>
                  <ol><b>User ID:</b> {user.id}</ol>
                  <ol><b>User Name:</b> {user.name}</ol>
                  <ol><b>Email:</b> {user.email}</ol>
                  <ol><b>Address:</b> {user.address} <br /></ol>
                </ul>
              </div>
            ))}
          </div>
        ) :
          <div style={{textAlign:'center', margin:'50px'}}>
            <h1>
              Permission denied
            </h1>
            <b>You are not logged in. Use routes '/login' or '/register'</b>
          </div>
      }
    </div>
  )
}

export default Home
