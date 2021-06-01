// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for job
const Job = require('../models/job')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE
// POST /comments
router.post('/comments', (req, res, next) => {
  // extract the review from the request's data (body)
  const commentData = req.body.comment

  // extracting the restaurantId from the review data
  const jobId = commentData.jobId

  // find the Job by its id
  Job.findById(jobId)
    // if there isn't a restaurant for the id we are searching
    // for, cause a 404 not found error to occur
    .then(handle404)
    .then(job => {
      // Create a new review in the `reviews` subdocument array
      // using the request's reviewData
      job.comments.push(commentData)

      // save the restaurant (which saves the new review)
      return job.save()
    })
    // responding with the updated restaurant that includes
    // our new review
    .then(job => res.status(201).json({ job }))
    .catch(next)
})

module.exports = router
