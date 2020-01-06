import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Input, Form } from '@rocketseat/unform'
import { toast } from 'react-toastify'

import { Container, Title, Buttons } from '~/components/Form/styles'
import api from '~/services/api'

export default function Edit({ match }) {
  const [program, setProgram] = useState({})
  const { id } = match.params

  useEffect(() => {
    async function loadProgram() {
      const response = await api.get('programs')

      const data = response.data.filter(p => p.id === Number(id))

      setProgram(data)
    }

    loadProgram()
  }, [id])

  async function handleUpdate(data) {
    try {
      await api.put(`programs/${id}`, {
        title: data.title,
        price: data.price,
        duration: data.duration
      })
      toast.success('Plano atualizado')
    } catch (error) {
      toast.error('Não foi possível atualizar o plano')
    }
  }
  return (
    <>
      <Title>Editar plano</Title>
      <Buttons>
        <Link to="/planos">
          <button type="button">Voltar</button>
        </Link>
        <button type="submit" form="form">
          Salvar
        </button>
      </Buttons>
      <Container width="900px">
        <Form initialData={program[0]} onSubmit={handleUpdate} id="form">
          <Input name="title" placeholder="Título do plano" />
          <Input name="duration" placeholder="Duração" />
          <Input name="price" placeholder="Preço Mensal" />
          <Input name="total" placeholder="Preço Total" disabled />
        </Form>
      </Container>
    </>
  )
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  })
}

Edit.defaultProps = {
  match: 0
}
