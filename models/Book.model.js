const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: String,
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Author"
    },
    genre:  {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Genre"
    }
    
})
const Book = mongoose.model('Book', bookSchema)
module.exports = Book