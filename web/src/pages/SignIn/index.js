import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { signInRequest } from '~/store/modules/auth/actions'

import logo from '~/assets/logo.svg'

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória')
  })

  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password))
  }

  return (
    <>
      <img src={logo} alt="GymPoint" />
      <h1>GYMPOINT</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div htmlFor="email">SEU E-MAIL</div>
        <Input name="email" type="email" placeholder="email@exemplo.com" />
        <div htmlFor="password">SUA SENHA</div>
        <Input name="password" type="password" placeholder="*******" />
        <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
        <Link to="/register">Criar usuário</Link>
      </Form>
    </>
  )
}
