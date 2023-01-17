const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./Router/Users.js')
const cors = require('cors')
const { json } = require('express')

require('dotenv').config()

const app = express()
const port = 5000

app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*")
  next()
})

app.use(cors({
  origin: "*",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: true,
  credentials: true,
}))

app.use(json())

mongoose.connect('mongodb+srv://Lisan123:Lisan123@lisancluster.nag9v4s.mongodb.net/Tracker?retryWrites=true&w=majority').then(() => {
  console.log('Database is connected')
}).catch(err => console.log(err))

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})