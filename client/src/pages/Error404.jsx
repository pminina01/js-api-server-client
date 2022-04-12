import React from 'react'

function Error404() {
    return (
        <ul style={{fontSize: '20px', textAlign: 'center', padding: '60px'}}>
        <h1>404 page not found</h1>
        <b>Please use one of the next routes:</b>
            <ol>Home page: /</ol>
            <ol>Login page: /login</ol>
            <ol>Register page: /register</ol>
        </ul>
    )
}

export default Error404