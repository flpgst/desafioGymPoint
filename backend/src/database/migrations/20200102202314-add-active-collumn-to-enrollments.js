module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('enrollments', 'active', {
      defaultValue: true,
      type: Sequelize.BOOLEAN,
      allowNull: false
    })
  },

  down: queryInterface => {
    return queryInterface.removeColumn('enrollments', 'active')
  }
}
