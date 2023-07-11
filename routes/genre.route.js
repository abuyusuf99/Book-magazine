const {Router} = require('express')
const {genreController} = require('../controllers/genre.controllers')
const router = Router()

router.post('/Genres', genreController.createGenre)
router.delete('/Genres/:id',genreController.deleteGenre)
router.get('/Genres',genreController.getGenre)
module.exports = router