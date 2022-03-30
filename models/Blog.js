const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true, default: "-"},
  content:{type: String, required: true, default:"-"},
  path_img: {type: String, default: null},
  date: {type: Date, required: true, default: Date.now},
})

module.exports = model('Blog', schema)