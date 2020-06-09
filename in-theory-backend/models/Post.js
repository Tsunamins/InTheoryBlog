const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
  }
});
module.exports = Post = mongoose.model("posts", PostSchema);