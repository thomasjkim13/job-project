const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
},
{
  timestamps: true
})

// export the reviewSchema so that we can require it in `restaurant.js`
// to create our subdocument relationship
module.exports = reviewSchema
