const Post = require('./Post.js');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true
  },
 
  posts: [{
      type: Schema.Types.ObjectId,
      ref: "Post"
  }],

}, {timestamps: true,


});
module.exports = User = mongoose.model("users", UserSchema);