require ('dotenv').config()

const { CONNECTION_STRING } = process.env

const Sequelize = require('sequelize')
const sequelize = new Sequelize(CONNECTION_STRING, {dialect: 'postgres'})

module.exports = {
    searchFunc: (req, res) => {
        console.log(req.body)
        const searchVal = req.body.bodee
        console.log(typeof searchVal)

        sequelize.query(`
            SELECT heroname FROM heroes
            WHERE heroes.heroname = '${searchVal}';
        `).then ((dbRes) => {
            res.status(200).send(dbRes[0])
            console.log(dbRes)
        })
    }
}