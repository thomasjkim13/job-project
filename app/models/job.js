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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
  }, {
    timestamps: true,
})

module.exports = mongoose.model('Job', jobSchema)