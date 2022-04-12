import React from 'react'
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Error404 from './pages/Error404'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div style={{height: '100%', display:'flex', flexDirection:'column'}}>
        <BrowserRouter>
            <Header />
            <div>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Home} />                    
                    <Route exact path="/register" component={Register} />
                    <Route path="*" component={Error404} />
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App