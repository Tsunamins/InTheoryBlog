
const Post = require('./Post.js');
const mongoose = require("mongoose");
const Schema = mongoose.Schema
//trying import version and explicit reference
//import { model, Schema } from 'mongoose'
//import Post from './Post.js'


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
      ref: Post.modelName
  }],

}, {timestamps: true,


});

//export default model('User', UserSchema)

//error coming from this line:
module.exports = User = mongoose.model("users", UserSchema);
//error fixed by "users", but, not inline with populating and pulling associations/relationships
//module.exports = User = mongoose.model("users", UserSchema);