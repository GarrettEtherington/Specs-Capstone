const express = require (`express`)
const cors = require (`cors`)
const dotenv = require (`dotenv`)
const session = require (`express-session`)
const {register} = require (`./controllers/Register`)
const {searchFunc} = require (`./controllers/search.js`)
const {seed} = require('./seed.js')


dotenv.config()
const {PORT} = process.env
const app = express()

app.use(express.json())
app.use(cors())
app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: 'some random string',
    })
)

app.get(`/search`, searchFunc)
app.post(`/seed`, seed)
app.post(`/register`, register)


app.listen(PORT, console.log(`still don't have a fun line to show that the port is running on 4545.`))