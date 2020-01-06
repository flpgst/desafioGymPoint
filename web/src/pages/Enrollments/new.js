import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Input, Form, Select } from '@rocketseat/unform'
import { toast } from 'react-toastify'
import history from '~/services/history'

import { Container, Title, Buttons } from '~/components/Form/styles'
import api from '~/services/api'

export default function New() {
  const [students, setStudents] = useState([])
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    async function loadOptions() {
      const studentsResponse = await api.get('students')
      const studentsList = studentsResponse.data.map(student => ({
        ...student,
        title: student.name
      }))
      const programsResponse = await api.get('programs')
      const programsList = programsResponse.data.map(program => ({
        ...program
      }))
      setStudents(studentsList)
      setPrograms(programsList)
    }

    loadOptions()
  }, [])

  async function handleSubmit(data) {
    try {
      await api.post('enrollments', {
        start_date: data.start_date,
        program_id: data.program,
        student_id: data.student
      })
      toast.success('Nova matrícula criada')
      history.push('/matriculas')
    } catch (error) {
      toast.error('Não foi possível criar a matrícula')
    }
  }
  return (
    <>
      <Title>Nova matrícula</Title>
      <Buttons>
        <Link to="/matriculas">
          <button type="button">Voltar</button>
        </Link>
        <button type="submit" form="form">
          Salvar
        </button>
      </Buttons>
      <Container width="900px">
        <Form onSubmit={handleSubmit} id="form">
          <Select name="student" options={students} />
          <Select name="program" options={programs} />
          <Input name="start_date" type="date" />
        </Form>
      </Container>
    </>
  )
}
