const {Router} = require('express')
const { authorController } = require('../controllers/author.controllers')
const router = Router()

router.post('/Author', authorController.createAuthor)
router.delete('/Author/:id', authorController.deleteAuthor)


module.exports = router