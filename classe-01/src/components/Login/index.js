import VoltarHome from '../VoltarHome'
import './style.css'

export default function Login() {
  return (
    <div className="container">
      <VoltarHome className="btn-voltar" />
      <form>
        <label>E-mail</label>
        <input type="text" />
        <label>Senha</label>
        <input type="password" />
        <button>Entrar</button>
      </form>
    </div>
  )
}
