const express = require (`express`)
const cors = require (`cors`)
const dotenv = require (`dotenv`)
const session = require (`express-session`)
const register = require (`./controllers/Register`)

dotenv.config()
const {PORT} = process.env
const app = express()

app.post(`/register`, register)

app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: 'some random string',
    })
)

app.listen(PORT, console.log(`still don't have a fun line to show that the port is running on 4545.`))