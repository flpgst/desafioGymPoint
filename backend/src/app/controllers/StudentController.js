import * as Yup from 'yup'
import { Op } from 'sequelize'
import { differenceInYears, parseISO } from 'date-fns'
import Student from '../models/Student'

class StudentController {
  async index(req, res) {
    const { name } = req.query

    if (name) {
      const student = await Student.findOne({
        where: {
          name: { [Op.iLike]: `%${name}%` }
        }
      })
      return res.json(student)
    }

    const students = await Student.findAll({ order: [['id', 'DESC']] })
    students.forEach(student => {
      student.age = differenceInYears(new Date(), parseISO(student.birthday))
    })

    return res.json(students)
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      birthday: Yup.date().required(),
      weight: Yup.number(),
      height: Yup.number()
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos dados' })
    }

    const emailExists = await Student.findOne({
      where: { email: req.body.email }
    })
    if (emailExists) return res.status(400).json({ error: 'Email já existe' })

    const {
      id,
      name,
      email,
      birthday,
      age,
      weight,
      height
    } = await Student.create(req.body)

    return res.json({
      id,
      name,
      email,
      birthday,
      age,
      weight,
      height
    })
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      birthday: Yup.date(),
      weight: Yup.number(),
      height: Yup.number()
    })
    const { id } = req.params

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação dos dados' })
    }

    const student = await Student.findOne({ where: { id: req.params.id } })

    const { name, email, weight, height, age } = await student.update(req.body)

    return res.json({
      id,
      name,
      email,
      weight,
      height,
      age
    })
  }

  async delete(req, res) {
    const student = await Student.findByPk(req.params.id)

    if (!req.superAdmin)
      return res
        .status(403)
        .json({ error: 'Somente administradores podem remover alunos' })

    if (!student) {
      res.status(401).json({ error: 'Aluno inexistente' })
    }

    try {
      await student.destroy()
    } catch (error) {
      return res.status(500).json(error.message)
    }

    return res.status(200).json({ error: 'Aluno excluído com sucesso' })
  }
}

export default new StudentController()
