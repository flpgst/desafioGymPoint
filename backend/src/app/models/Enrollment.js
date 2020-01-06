import Sequelize, { Model } from 'sequelize'
import { isBefore, isAfter } from 'date-fns'

class Enrollment extends Model {
  static init(sequelize) {
    super.init(
      {
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        price: Sequelize.DECIMAL,
        student_id: Sequelize.INTEGER,
        program_id: Sequelize.INTEGER,
        active: Sequelize.BOOLEAN
      },
      {
        sequelize
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' })
    this.belongsTo(models.Program, { foreignKey: 'program_id', as: 'program' })
  }
}

export default Enrollment
