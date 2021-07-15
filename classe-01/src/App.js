import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
      <main>
        <Router>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Router>
      </main>
    </div>
  )
}

export default App
