const Genre = require("../models/Genre.model");
module.exports.genreController = {
  createGenre: (req, res) => {
    Genre.create({
      title: req.body.title,
      description: req.body.description,
    }).then((data)=>{
        res.json(data)
    })
  },
  deleteGenre:(req,res)=>{
    Genre.findByIdAndRemove(req.params.id).then((data)=>{res.json(data)})
  },
  getGenre:(req,res)=>{
    Genre.find().then((data)=>{res.json(data)})
  }
};
