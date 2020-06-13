// Load User model
const Post = require("../../../models/Post");
const User = require("../../../models/User")

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/keys");



router.route('/').get((req, res) => {
    Post.find().populate('author')
        .then(posts => res.json({
          data: posts,
          message: "Reached get all posts route"}))
     
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/users/:id/posts').get((req, res) => {
//     Post.find({ user : req.params.userId })
//     .exec(function (err, posts) {
//       if (err){
//         if(err.kind === 'ObjectId') {
//           return res.status(404).send({
//             message: "Posts not found with given User Id " + req.params.userId
//           });                
//         }
//         return res.status(500).send({
//           message: "Error retrieving Posts with given User Id " + req.params.userId
//         });
//       }
            
//       res.send(posts);
//     });
//   });

router.route('/new').post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const topic = req.body.topic;
    const author = req.body.author
    
  
    
    const newPost = new Post({
        title,
        content,
        topic,
        author,
    });

    newPost.save()
    .then(() => res.json({
      message: 'Post added!',
      data: newPost
    }))
    User.findById(author)
    .then(user => {
      user.posts.push(newPost._id)
      user.save()
      // .then(() => res.json('Post added to user!'))
      // .catch(err => res.status(400).json('Error: ' + err));
    })

    .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/:id').get((req, res) => {
     Post.findById(req.params.id)
   
      .then(post => res.json(post))
     
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
      .then(() => res.json('Post deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').patch((req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        post.title = req.body.title;
        post.content = req.body.content;
        post.topic = title = req.body.title;
       
  
        post.save()
          .then(() => res.json('Post updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;











module.exports = router;