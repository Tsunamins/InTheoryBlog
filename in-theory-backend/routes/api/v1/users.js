// Load User model
const User = require("../../../models/User");
const Post = require("../../../models/Post")

const express = require("express");
const router = express.Router();



router.route('/').get((req, res) => {
  //exclude password by User.find().select("-password")
  User.find().populate('posts').select("-password")
      // .populate('posts')
      .then(user => res.json({
        data: user,
        message: "Reached get all users route"}))
   
      .catch(err => res.status(400).json('Error: ' + err));
})

  router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .populate('posts').select("-password") //this is specifically rendering posts assoc w user
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });





  module.exports = router;