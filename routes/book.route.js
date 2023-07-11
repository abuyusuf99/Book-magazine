const {Router} = require('express')
const {bookController} = require('../controllers/book.controllers')
const router = Router()

router.post('/Books', bookController.createBook)
router.delete('/Books/:id', bookController.deleteBook)
router.patch('/Books/:id',bookController.patchBook)
router.get('/Books/:id', bookController.getBook)
router.get('/Books',bookController.getBooks)
router.get('/BooksGenre/:id',bookController.getBooksGenre)


module.exports = router