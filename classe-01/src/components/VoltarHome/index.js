import './style.css'
import { Link } from 'react-router-dom'
export default function VoltarHome() {
  return (
    <Link to="/">
      <button className="voltar-home">↩ Página principal</button>
    </Link>
  )
}
