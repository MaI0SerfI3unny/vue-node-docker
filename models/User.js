const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  status: {type: String, required: true, unique:false, default:"user"},
  password: {type: String, required: true},
})

module.exports = model('User', schema)