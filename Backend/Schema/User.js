const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  { username: { type: String, required: true, minlength: 3 } },
  { collection: 'usersCollection' }
)

const User = mongoose.model('USERSCHEMA', userSchema)

module.exports = User
