import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { parseISO, format } from 'date-fns'

import { Input, Form, Scope } from '@rocketseat/unform'
import { toast } from 'react-toastify'
import history from '~/services/history'

import { Container, Title, Buttons } from '~/components/Form/styles'
import api from '~/services/api'

export default function Edit({ match }) {
  const [enrollments, setEnrollments] = useState({})
  const { id } = match.params

  useEffect(() => {
    async function loadEnrollment() {
      const response = await api.get('enrollments')

      const data = response.data.filter(e => e.id === Number(id))

      data[0].start_date = format(parseISO(data[0].start_date), 'yyyy-MM-dd')
      data[0].end_date = format(parseISO(data[0].end_date), 'yyyy-MM-dd')

      setEnrollments(data)
    }

    loadEnrollment()
  }, [id])

  async function handleUpdate(data) {
    const response = await api.get('enrollments')

    data = { ...data, program_id: response.data[0].program.id }

    try {
      await api.put(`enrollments/${id}`, {
        program_id: data.program_id,
        start_date: data.start_date
      })
      toast.success('Matrícula atualizada')
      history.push('/matriculas')
    } catch (error) {
      toast.error('Não foi possível atualizar a matrícula')
    }
  }
  return (
    <>
      <Title>Editar matrícula</Title>
      <Buttons>
        <Link to="/matriculas">
          <button type="button">Voltar</button>
        </Link>
        <button type="submit" form="form">
          Salvar
        </button>
      </Buttons>
      <Container width="900px">
        <Form initialData={enrollments[0]} onSubmit={handleUpdate} id="form">
          <Scope path="student">
            <Input name="name" placeholder="Nome do aluno" disabled />
          </Scope>
          <Scope path="program">
            <Input name="title" placeholder="Plano" disabled />
          </Scope>
          <Input name="start_date" type="date" placeholder="Data de Início" />
          <Input
            name="end_date"
            type="date"
            placeholder="Data Término"
            disabled
          />
          <Input
            name="price"
            type="number"
            step="0.01"
            placeholder="Preço"
            disabled
          />
        </Form>
      </Container>
    </>
  )
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
}

Edit.defaultProps = {
  match: ''
}
