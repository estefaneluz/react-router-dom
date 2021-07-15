import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Home from './components/Home'

// import { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom'

function RotasProtegidas({ logged, children }) {
  return <Route render={() => (logged ? children : <Redirect to="/login" />)} />
}

function App() {
  const logged = false

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <main>
            <Route path="/login" component={Login} />
            <RotasProtegidas logged={logged}>
              <Route path="/profile" component={Profile} />
            </RotasProtegidas>
          </main>
        </Switch>
      </Router>
    </div>
  )
}

export default App
