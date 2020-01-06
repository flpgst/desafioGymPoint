import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Form } from '@rocketseat/unform'
import { toast } from 'react-toastify'

import { Container, Title, Buttons } from '~/components/Form/styles'
import api from '~/services/api'

export default function New() {
  async function handleSubmit(data) {
    try {
      await api.post('programs', {
        title: data.title,
        price: data.price,
        duration: data.duration
      })
      toast.success('Novo plano cadastrado')
    } catch (error) {
      toast.error('Não foi possível cadastrar o plano')
    }
  }
  return (
    <>
      <Title>Cadastro de plano</Title>
      <Buttons>
        <Link to="/planos">
          <button type="button">Voltar</button>
        </Link>
        <button type="submit" form="form">
          Salvar
        </button>
      </Buttons>
      <Container width="900px">
        <Form onSubmit={handleSubmit} id="form">
          <Input name="title" placeholder="Título do plano" />
          <Input name="duration" placeholder="Duração" />
          <Input name="price" placeholder="Preço Mensal" />
          <Input name="total" placeholder="Preço Total" disabled />
        </Form>
      </Container>
    </>
  )
}
