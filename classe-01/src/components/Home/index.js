import { Link } from 'react-router-dom'
import './style.css'

export default function Home() {
  return (
    <div className="container home">
      <button>
        <Link to="/profile">Profile</Link>
      </button>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </div>
  )
}
