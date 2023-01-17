const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./Routes/Users')
const cors = require('cors')

require('dotenv').config()

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.URL, { useNewUrlParser: true, useCreateIndex: true })

const connection = mongoose.connection

connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

app.use('/users', usersRouter)

app.listen(port, (req, res) => {
  console.log(`Server is running on port: ${port}`)
})