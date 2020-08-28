const express = require('express')
const port = process.env.PORT || 3001
const app = express()

const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport')
const routes = require('./routes')



app.use(express.json())


const corsOptions = {
  origin: [`http://localhost:3000`, 'https://toolorganize.herokuapp.com/'],
  credentials: true, 
  optionsSuccessStatus: 204  
}

app.use(cors(corsOptions))


app.use(session({
  
  store: new MongoStore({ url: process.env.MONGODB_URI || "mongodb://localhost:27017/toolorganizer" }),
  secret: "what",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 5
  }
}))


app.use(passport.initialize())
app.use(passport.session())


app.use('/users', routes.users)
app.use('/auth', routes.auth)

app.listen(process.env.PORT || 3000)
// app.listen(port, () => console.log(`Server is running on port ${port}`))