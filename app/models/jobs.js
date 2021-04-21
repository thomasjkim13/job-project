const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  company: {
    type: String,
    required: true
  },
  experienceLevel: {
    type: String,
    required: true
  }, 
  owner: {
      ref: 'User'
  }
  }, {
    timestamps: true,
})

module.exports = mongoose.model('Job', jobSchema)