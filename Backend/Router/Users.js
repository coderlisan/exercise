const { Router } = require('express')
// const router = require('express').Router()
// let User = require('../Schema/User.js')
const USERSCHEMA = require('../Schema/User.js')

const userRouter = Router()

userRouter.route('/add').post((req, res) => {
  console.log('Received Data - - - - - - - -', req.body)

  const username = req.body
  console.log('It is username - - - ', username)

  // const newUser = new User({ username })
  // newUser.save().then(() => {
  //   res.status(200).json('added')
  // }).catch(err => res.status(400).json('Error' + err))
  USERSCHEMA.create(username, (error, data)=>{
    if (error){
      console.log('Error message', error.message)
      res.status(400).json({"Error": error})
  } else{
    res.status(200).json({"successfully saved in databse": data})
  }
  })
})
// res.json syntax is incorrect edit following line 28, correct syntax can be found at line 23
// userRouter.route('/search').get((req, res) => {
//   User.find().then(users => res.json(users)).catch(err => res.status(400).json('Error' + err))
// })

userRouter.route('/').get((req, res)=>{
  res.status(200).json({'Database found'})
})

module.exports = userRouter
