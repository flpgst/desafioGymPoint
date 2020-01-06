import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Form } from '@rocketseat/unform'
import { toast } from 'react-toastify'
import { parseISO } from 'date-fns'

import { Container, Title, Buttons } from '~/components/Form/styles'
import api from '~/services/api'

export default function New() {
  async function handleSubmit(data) {
    try {
      await api.post('students', {
        name: data.name,
        email: data.email,
        birthday: parseISO(data.birthday),
        weight: data.weight,
        height: data.height
      })
      toast.success('Novo aluno cadastrado')
    } catch (error) {
      toast.error('Não foi possível cadastrar o aluno')
    }
  }
  return (
    <>
      <Title>Cadastro de aluno</Title>
      <Buttons>
        <Link to="/alunos">
          <button type="button">Voltar</button>
        </Link>
        <button type="submit" form="form">
          Salvar
        </button>
      </Buttons>
      <Container width="900px">
        <Form onSubmit={handleSubmit} id="form">
          <Input name="name" placeholder="Nome do aluno" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="birthday" type="date" placeholder="Data de nascimento" />
          <Input name="weight" type="number" step="0.1" placeholder="Peso" />
          <Input name="height" type="number" step="0.01" placeholder="Altura" />
        </Form>
      </Container>
    </>
  )
}
