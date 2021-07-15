import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
      <main>
        <Login />
        <Profile />
      </main>
    </div>
  )
}

export default App
