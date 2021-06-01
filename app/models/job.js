const mongoose = require('mongoose')
const commentSchema = require('./comment')

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  // create a one-to-many relationship
  // where one job has many reviews using subdocuments
  comments: [commentSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Job', jobSchema)
