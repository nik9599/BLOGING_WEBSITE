import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    requierd: true,
    unique: true,
  },
  descritption: {
    type: String,
    requierd: true,
  },
  picture: {
    type: String,
    requierd: false,
  },
  username: {
    type: String,
    requierd: true,
  },
  name: {
    type: String,
    requierd: true,
  },
  categories: {
    type: String,
    requierd: true,
  },
  createdDate: {
    type: Date,
  },
});

const Post = mongoose.model('post', PostSchema);

export default Post