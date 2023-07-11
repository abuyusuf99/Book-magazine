const {Router} = require('express')
const {reviewController} = require('../controllers/review.controllers')
const router = Router()

router.post('/Review', reviewController.createReview)
router.delete('/Review/:id',reviewController.deleteReview)
router.get('/Review',reviewController.getReview)
module.exports = router