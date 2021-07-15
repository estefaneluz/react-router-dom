import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact>
          <nav>
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </Route>
        <main>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </main>
      </Router>
    </div>
  )
}

export default App
