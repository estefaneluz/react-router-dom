import VoltarHome from '../VoltarHome'

export default function Login() {
  return (
    <div>
      <VoltarHome />
      <forms>
        <label>E-mail</label>
        <input type="text" />
        <label>Senha</label>
        <input type="password" />
        <button>Entrar</button>
      </forms>
    </div>
  )
}
