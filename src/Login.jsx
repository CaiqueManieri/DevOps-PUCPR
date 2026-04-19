import { Component } from 'react'
import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      senha: '',
      mensagem: '',
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeSenha = this.handleChangeSenha.bind(this)
    this.handleAcessar = this.handleAcessar.bind(this)
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  handleChangeSenha(e) {
    this.setState({ senha: e.target.value })
  }

  handleAcessar() {
    if (
      this.state.email === 'eduardo.lino@pucpr.br' &&
      this.state.senha === '123456'
    ) {
      this.setState({ mensagem: 'Acessado com sucesso!' })
    } else {
      this.setState({ mensagem: 'Usuário ou senha incorretos!' })
    }
  }

  render() {
    return (
      <div style={{ padding: '15px' }}>
        <h1>Login</h1>

        <p>
          email
          <br />
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
        </p>

        <p>
          senha
          <br />
          <input
            type="password"
            value={this.state.senha}
            onChange={this.handleChangeSenha}
          />
        </p>

        <button
          type="button"
          className="btn-acessar"
          onClick={this.handleAcessar}
        >
          Acessar
        </button>

        {this.state.mensagem !== '' ? (
          <p>
            <label>{this.state.mensagem}</label>
          </p>
        ) : null}
      </div>
    )
  }
}
