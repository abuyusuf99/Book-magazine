const Review = require("../models/Review.model");
module.exports.reviewController = {
  createReview: (req, res) => {
    Review.create({
      text: req.body.text,
      name: req.body.name,
      book: req.body.book
    }).then((data)=>{
        res.json(data)
    })
  },
  deleteReview:(req,res)=>{
    Review.findByIdAndRemove(req.params.id).then((data)=>{res.json(data)})
  },
  getReview:(req,res)=>{
    Review.find().populate('book').then((data)=>{res.json(data)})
  }
};
