const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL ||'postgres://locallhost:5432/YOUR_DB_NAME_HERE', {
    logging: false
})

module.exports = db