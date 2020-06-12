const User = require('./User.js');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
  date: {
    type: Date,
    default: Date.now
  },
  author: {
      type: Schema.Types.ObjectId,
      ref: "User"
  },

 }, {timestamps: true,

});


module.exports = Post = mongoose.model("posts", PostSchema);