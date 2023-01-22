const { Router } = require('express')
const USERSCHEMA = require('../Schema/User.js')

const userRouter = Router()

userRouter.route('/add').post((req, res) => {
  console.log('Received Data - - - - - - - -', req.body)

  const username = req.body
  console.log('It is username - - - ', username)

  USERSCHEMA.create(username, (error, data) => {
    if (error) {
      console.log('Error message', error.message)
      res.status(400).json({ "Error": error.message })
    } else {
      res.status(200).json({ "Saved to database": data })
    }
  })
})

userRouter.route('/').get((req, res) => {
  res.status(200).json('Database found')
})

module.exports = userRouter