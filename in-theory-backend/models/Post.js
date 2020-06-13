

const User = require('./User.js');
const mongoose = require("mongoose");
const Schema = mongoose.Schema
// import { model, Schema } from 'mongoose';
 //import User from './User.js'
// Create Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
 
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users' //changing this to users, populated author, w .populate('author')
},

 }, {timestamps: true,

});

//export default model('Post', PostSchema)

module.exports = Post = mongoose.model("Post", PostSchema);
