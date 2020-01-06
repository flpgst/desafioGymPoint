import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '~/services/api'

import { Container, Title, Buttons } from '~/components/Form/styles'
import { ProgramList } from './styles'

export default function Programs() {
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    async function loadPrograms() {
      const response = await api.get('programs')

      const data = response.data.map(program => ({
        ...program
      }))

      setPrograms(data)
    }

    loadPrograms()
  }, [])

  async function handleDelete(id) {
    await api.delete(`programs/${id}`)
    setPrograms(programs.filter(program => program.id !== id))
  }

  return (
    <>
      <Title>Gerenciamanto de Planos</Title>
      <Buttons>
        <Link to="planos/novo">
          <button type="button">+ Cadastrar</button>
        </Link>
      </Buttons>
      <Container width="900px">
        <ProgramList>
          <thead>
            <tr>
              <th>Título</th>
              <th>Duração</th>
              <th>Valor p/ Mês</th>
              <th>Opções</th>
            </tr>
          </thead>
          {programs.map(program => (
            <tbody key={String(program.id)}>
              <tr>
                <td>{program.title}</td>
                <td>
                  {program.duration} {program.duration > 1 ? 'meses' : 'mês'}
                </td>
                <td>R${program.price}</td>
                <td>
                  <Link to={`planos/${program.id}`}>
                    <button style={{ color: '#0066ff' }} type="button">
                      editar
                    </button>
                  </Link>

                  <button
                    type="button"
                    style={{ color: '#ee4d64' }}
                    onClick={() => handleDelete(program.id)}
                  >
                    apagar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </ProgramList>
      </Container>
    </>
  )
}
