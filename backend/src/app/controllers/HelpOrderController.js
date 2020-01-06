import Queue from '../../lib/Queue'
import HelpOrderMail from '../jobs/HelpOrderMail'
import HelpOrder from '../schemas/HelpOrder'
import Student from '../models/Student'

class HelpOrderController {
  async index(req, res) {
    let helpOrders
    const { _id } = req.body
    if (req.superAdmin) {
      helpOrders = _id
        ? await HelpOrder.findById(_id)
        : await HelpOrder.find({
            answer: { $exists: false }
          })
    } else {
      const { id } = await Student.findOne({ where: { user_id: req.userId } })
      helpOrders = await HelpOrder.find({
        student_id: id
      })
    }
    return res.json(helpOrders)
  }

  async store(req, res) {
    const { id, name, email } = await Student.findOne({
      where: { user_id: req.userId }
    })

    const { question } = req.body

    await HelpOrder.create({
      student_id: id,
      student: name,
      email,
      question
    })

    return res.json({ message: 'Pedido de ajuda enviado' })
  }

  async update(req, res) {
    const { answer } = req.body
    const { id } = await HelpOrder.findByIdAndUpdate(req.params.id, {
      answer,
      answered_at: new Date()
    })
    const helpOrder = await HelpOrder.findById(id)
    await Queue.add(HelpOrderMail.key, { helpOrder })

    return res.json(helpOrder)
  }
}

export default new HelpOrderController()
