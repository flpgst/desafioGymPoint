import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { MdCheckCircle } from 'react-icons/md'

import api from '~/services/api'

import { Container, Title, Buttons, List } from '~/components/Form/styles'

export default function Enrollments() {
  const [enrollments, setEnrollments] = useState([])

  useEffect(() => {
    async function loadEnrollments() {
      const response = await api.get('enrollments')

      const data = response.data.map(enrollment => ({
        ...enrollment
      }))

      setEnrollments(data)
    }

    loadEnrollments()
  }, [])

  async function handleActive(enrollment) {
    const active = !enrollment.active
    const program_id = enrollment.program.id

    await api.put(`enrollments/${enrollment.id}`, {
      active,
      program_id
    })

    const data = enrollments.map(e =>
      e === enrollment ? { ...e, active } : { ...e }
    )
    setEnrollments(data)
  }

  async function handleDelete(id) {
    await api.delete(`enrollments/${id}`)
    setEnrollments(enrollments.filter(enrollment => enrollment.id !== id))
  }

  return (
    <>
      <Title>Gerenciamanto de Matrículas</Title>
      <Buttons>
        <Link to="matriculas/novo">
          <button type="button">+ Cadastrar</button>
        </Link>
      </Buttons>
      <Container width="900px">
        <List>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Plano</th>
              <th>Início</th>
              <th>Término</th>
              <th>Ativa</th>
            </tr>
          </thead>
          {enrollments.map(enrollment => (
            <tbody key={String(enrollment.id)}>
              <tr>
                <td>{enrollment.student.name}</td>
                <td>{enrollment.program.title}</td>
                <td>{format(parseISO(enrollment.start_date), 'dd/MM/yyyy')}</td>
                <td>{format(parseISO(enrollment.end_date), 'dd/MM/yyyy')}</td>
                <td>
                  <MdCheckCircle
                    color={enrollment.active ? '#20d64e' : '#ee4d64'}
                    size={20}
                  />
                </td>
                <td style={{ width: '250px' }}>
                  <Link to={`matriculas/${enrollment.id}`}>
                    <button style={{ color: '#0066ff' }} type="button">
                      {enrollment.active && 'editar'}
                    </button>
                  </Link>

                  <button
                    type="button"
                    style={{ color: '#666' }}
                    onClick={() => handleActive(enrollment)}
                  >
                    {enrollment.active ? 'inativar' : 'ativar'}
                  </button>

                  <button
                    type="button"
                    style={{ color: '#ee4d64' }}
                    onClick={() => handleDelete(enrollment.id)}
                  >
                    apagar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </List>
      </Container>
    </>
  )
}
