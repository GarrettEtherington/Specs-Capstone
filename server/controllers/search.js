require ('dotenv').config()

const { CONNECTION_STRING } = process.env

const Sequelize = require('sequelize')
const sequelize = new Sequelize(CONNECTION_STRING, {dialect: 'postgres'})

module.exports = {
    searchFunc: (req, res) => {
        const searchVal = req.body.bodee

        // add logic to account for upper/lower case

        sequelize.query(`
            SELECT * FROM heroes
            WHERE heroes.heroname = '${searchVal}';
        `).then ((dbRes) => {
            res.status(200).send(dbRes[0][0])
            console.log(dbRes)
        })
    }
}