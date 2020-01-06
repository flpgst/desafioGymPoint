import { Op } from 'sequelize'
import { endOfToday, subDays } from 'date-fns'
import Checkin from '../models/Checkin'
import Student from '../models/Student'

class CheckinController {
  async store(req, res) {
    const student = await Student.findOne({ where: { user_id: req.userId } })

    if (!student) {
      return res.status(400).json('Cliente não existe')
    }

    const sequentialheckins = await Checkin.count({
      created_at: { [Op.between]: [subDays(endOfToday(), 7), endOfToday()] }
    }).then(checkins => {
      return checkins
    })
    if (sequentialheckins > 6)
      return res
        .status(400)
        .json({ error: 'Excedido número máximo de checkins na semana' })

    const checkin = await Checkin.create({ student_id: student.id })

    return res.json(checkin)
  }

  async index(req, res) {
    const { id } = req.params
    const student = await Student.findOne({ where: { user_id: id } })

    const checkins = await Checkin.findAll({
      where: { student_id: student.id }
    })

    return res.json(checkins)
  }
}

export default new CheckinController()
