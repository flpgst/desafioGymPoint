import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Input, Form } from '@rocketseat/unform'
import { toast } from 'react-toastify'
import history from '~/services/history'

import { Container, Title, Buttons } from '~/components/Form/styles'
import api from '~/services/api'

export default function HelpOrder({ match }) {
  const [helpOrder, setHelpOrder] = useState({})
  const { id } = match.params

  useEffect(() => {
    async function loadHelpOrder() {
      const response = await api.get('help-orders')
      setHelpOrder(response.data.filter(data => data._id === id))
    }

    loadHelpOrder()
  }, [id])

  async function handleUpdate(data) {
    try {
      await api.put(`help-orders/${id}`, {
        program_id: data.program_id,
        answer: data.answer
      })
      toast.success('Pergunta respondida')
      history.push('/matriculas')
    } catch (error) {
      toast.error('Não foi possível salvar a resposta')
    }
  }
  return (
    <>
      <Title>Responder pedidos de ajuda</Title>
      <Buttons>
        <Link to="/">
          <button type="button">Voltar</button>
        </Link>
        <button type="submit" form="form">
          Salvar
        </button>
      </Buttons>
      <Container width="900px">
        <Form initialData={helpOrder[0]} onSubmit={handleUpdate} id="form">
          <Input name="student" placeholder="Nome do aluno" disabled />
          <Input name="question" placeholder="Pergunta" />
          <Input name="answer" placeholder="Resposta" />
        </Form>
      </Container>
    </>
  )
}

HelpOrder.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
}

HelpOrder.defaultProps = {
  match: ''
}
