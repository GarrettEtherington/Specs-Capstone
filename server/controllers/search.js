require ('dotenv').config()

const { CONNECTION_STRING } = process.env

const Sequelize = require('sequelize')
const sequelize = new Sequelize(CONNECTION_STRING, {dialect: 'postgres'})

module.exports = {
    searchFunc: (req, res) => {
        const searchVal = req.body.bodee

        sequelize.query(`
            SELECT hero_name FROM heroes
            WHERE heroes.hero_name = ${searchVal}
        `).then ((dbRes) => {
            res.status(200).send(dbRes)
            console.log(dbRes)
        })
    }
}