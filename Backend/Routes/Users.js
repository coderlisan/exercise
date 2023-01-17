const router = require('express').Router()
let User = require('../Schema/User')

router.route('/add').post((req, res) => {
  console.log('user added')
  
  const username = req.body.username
  console.log(username)
  
  const newUser = new User({ username })
  newUser.save().then(() => {
    res.json('added')
    console.log('added lisan')
    
  }).catch(err => res.status(400).json('Error' + err))
})

router.route('/').get((req, res) => {
  User.find().then(users => res.json(users)).catch(err => res.status(400).json('Error' + err))
})

module.exports = router