const { Router } = require("express");
const Author = require('../models/Author.model')
module.exports.authorController = {
  createAuthor: (req, res) => {
    Author.create({
      name: req.body.name,
      information: req.body.information,
    }).then((data) => {
      res.json(data);
    });
  },
  deleteAuthor:(req,res)=>{
    Author.findByIdAndRemove(req.params.id).then((data)=>{res.json(data)})
  },
}