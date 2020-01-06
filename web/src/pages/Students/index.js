import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '~/services/api'

import { Container, Title, Buttons, List } from '~/components/Form/styles'

export default function Students() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students')

      const data = response.data.map(student => ({
        ...student
      }))

      setStudents(data)
    }

    loadStudents()
  }, [])

  async function handleDelete(id) {
    await api.delete(`students/${id}`)
    setStudents(students.filter(student => student.id !== id))
  }

  return (
    <>
      <Title>Gerenciamanto de Alunos</Title>
      <Buttons>
        <Link to="alunos/novo">
          <button type="button">+ Cadastrar</button>
        </Link>
      </Buttons>
      <Container width="900px">
        <List>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Idade</th>
              <th>Opções</th>
            </tr>
          </thead>
          {students.map(student => (
            <tbody key={String(student.id)}>
              <tr>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <Link to={`alunos/${student.id}`}>
                    <button style={{ color: '#0066ff' }} type="button">
                      editar
                    </button>
                  </Link>

                  <button
                    type="button"
                    style={{ color: '#ee4d64' }}
                    onClick={() => handleDelete(student.id)}
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
