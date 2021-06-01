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
// POST /comments/
router.post('/comments', requireToken, (req, res, next) => {
  // get the comment data from the body of the request
  const commentData = req.body.comment
  // get the job id from the body
  const jobId = commentData.jobId
  // find the job by its id
  Job.findById(jobId)
    .then(handle404)
    .then(job => {
      // add comment to job
      job.comments.push(commentData)
      // save restaurant
      return job.save()
    })
    // send responsne back to client
    .then(job => res.status(201).json({ job }))
    .catch(next)
})

router.delete('/comments/:commentId', requireToken, (req, res, next) => {
  // extract the comment's id from the url
  const commentId = req.params.commentId

  // extracting the job's id from the incoming request's data
  const jobId = req.body.comment.jobId

  Job.findById(jobId)
    .then(handle404)
    .then(job => {
      // select the comment subdocument with the id `commentId` (job.comments.id(commentId))
      // then remove it (delete it)
      job.comments.id(commentId).remove()

      // save our deletion
      return job.save()
    })
    // if successfully deleted, respond with 204 No Content
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.patch('/comments/:commentId', (req, res, next) => {
  const commentId = req.params.commentId
  // extract the comment data from our request's body
  const commentData = req.body.comment
  const jobId = commentData.jobId

  Job.findById(jobId)
    .then(handle404)
    .then(job => {
      // select the comment with the id  `commentId`
      const comment = job.comments.id(commentId)

      // update our comment, with the request's data (commentData)
      comment.set(commentData)

      // save our changes, by saving the job
      return job.save()
    })
    .then(() => res.sendStatus(204))
    // .then(job => res.json({ job }))
    .catch(next)
})

module.exports = router
