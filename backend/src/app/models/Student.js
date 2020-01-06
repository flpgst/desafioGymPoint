import Sequelize, { Model } from 'sequelize'
import { differenceInYears, parseISO } from 'date-fns'
import User from './User'
import Permission from './Permission'

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        birthday: Sequelize.DATE,
        age: Sequelize.VIRTUAL,
        weight: Sequelize.FLOAT,
        height: Sequelize.FLOAT,
        user_id: Sequelize.INTEGER
      },
      {
        sequelize
      }
    )

    this.addHook('afterSave', async student => {
      if (student.birthday)
        student.age = differenceInYears(new Date(), parseISO(student.birthday))
    })

    this.addHook('afterCreate', async student => {
      const id = await Permission.findOne({ where: { name: 'student' } }).then(
        p => p.id
      )

      User.create({
        name: student.name,
        email: student.email,
        password: student.email,
        permission_id: id
      }).then(u => {
        Student.update({ user_id: u.id }, { where: { id: student.id } })
      })
    })

    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

export default Student
