const { json } = require("express");
const Book = require("../models/Book.model");
module.exports.bookController = {
  createBook: (req, res) => {
    Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    }).then((data) => {
      res.json(data);
    });
  },
  deleteBook:(req,res)=>{
    Book.findByIdAndRemove(req.params.id).then((data)=>{
        res.json(data)
    })
  },
  patchBook:(req,res)=>{
    Book.findByIdAndUpdate(req.params.id, req.body).then((data)=>{
        res.json(data)
    })
  },
  getBook:(req,res)=>{
    Book.findById(req.params.id).populate('genre').then((data)=>{
        res.json(data)
    })
  },
  getBooks:(req,res)=>{
    Book.find().then((data)=>{
        res.json(data)
    })
  },
  getBooksGenre:(req,res)=>{
    Book.find({genre :req.params.id}).then((data)=>{res.json(data)})
  }
};
