const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  DATABASE_NANE, // Database name
  DATABASE_USER, // User
  DATABASE_PASSWORD, // Password
  {
    host: DATABASE_HOST, // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
