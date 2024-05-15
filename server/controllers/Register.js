const { Sequelize } = require("sequelize")
const User = require("../models/user")
require ('dotenv').config()

const { CONNECTION_STRING } = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {dialect: 'postgres'})




module.exports ={
    register: (req, res) => {
            let {username, password} = req.body
            sequelize.query(`
                SELECT username FROM users WHERE "${username}" = users.username;
            `) .then((dbRes) => {
                console.log(dbRes)
                res.status(200).send("hi")
            })
            // if (foundUser){
            //     res.status(400).send('Username be took my man')
            // } else {
            //     sequelize.query(`
            //         INSERT INTO users (username, password)
            //         VALUES ('${username}', '${password}')            
            //     `) .then ((dbRes) => {
            //         req.session.user = dbRes[0][0]
            //         console.log(dbRes[0])
            //         res.status(200).send(dbRes[0])
            //     })
            // }
        }
    }
