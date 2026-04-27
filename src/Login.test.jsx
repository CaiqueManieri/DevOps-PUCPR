import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { afterEach, describe, expect, it } from 'vitest'
import Login from './Login'

afterEach(() => {
  cleanup()
})

describe('Login', () => {
  it('exibe mensagem de sucesso quando credenciais sao validas', () => {
    render(<Login />)

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'eduardo.lino@pucpr.br' },
    })
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: '123456' },
    })

    fireEvent.click(screen.getByRole('button', { name: /acessar/i }))

    expect(screen.getByText('Acessado com sucesso!')).toBeInTheDocument()
  })

  it('exibe mensagem de erro quando email esta incorreto', () => {
    render(<Login />)

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'errado@pucpr.br' },
    })
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: '123456' },
    })

    fireEvent.click(screen.getByRole('button', { name: /acessar/i }))

    expect(screen.getByText('Usuário ou senha incorretos!')).toBeInTheDocument()
  })

  it('exibe mensagem de erro quando senha esta incorreta', () => {
    render(<Login />)

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'eduardo.lino@pucpr.br' },
    })
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: 'senhaErrada' },
    })

    fireEvent.click(screen.getByRole('button', { name: /acessar/i }))

    expect(screen.getByText('Usuário ou senha incorretos!')).toBeInTheDocument()
  })

  it('exibe mensagem de erro quando campos estao vazios', () => {
    render(<Login />)

    fireEvent.click(screen.getByRole('button', { name: /acessar/i }))

    expect(screen.getByText('Usuário ou senha incorretos!')).toBeInTheDocument()
  })

  it('nao exibe mensagem antes de clicar no botao acessar', () => {
    render(<Login />)

    expect(
      screen.queryByText('Usuário ou senha incorretos!')
    ).not.toBeInTheDocument()
    expect(screen.queryByText('Acessado com sucesso!')).not.toBeInTheDocument()
  })
})
