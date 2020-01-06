import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { parseISO } from 'date-fns'

import { Input, Form } from '@rocketseat/unform'
import { toast } from 'react-toastify'

import { Container, Title, Buttons } from '~/components/Form/styles'
import api from '~/services/api'

export default function Edit({ match }) {
  const [student, setStudent] = useState({})
  const { id } = match.params

  useEffect(() => {
    async function loadStudent() {
      const response = await api.get('students')

      const data = response.data.filter(s => s.id === Number(id))

      setStudent(data)
    }

    loadStudent()
  }, [id])

  async function handleUpdate(data) {
    try {
      await api.put(`students/${id}`, {
        name: data.name,
        email: data.email,
        birthday: parseISO(data.birthday),
        weight: data.weight,
        height: data.height
      })
      toast.success('Aluno atualizado')
    } catch (error) {
      toast.error('Não foi possível atualizar o aluno')
    }
  }
  return (
    <>
      <Title>Editar aluno</Title>
      <Buttons>
        <Link to="/alunos">
          <button type="button">Voltar</button>
        </Link>
        <button type="submit" form="form">
          Salvar
        </button>
      </Buttons>
      <Container width="900px">
        <Form initialData={student[0]} onSubmit={handleUpdate} id="form">
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
