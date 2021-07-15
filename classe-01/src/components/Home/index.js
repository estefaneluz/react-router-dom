import { Link } from 'react-router-dom'
import './style.css'

export default function Home() {
  return (
    <div className="container home">
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  )
}
