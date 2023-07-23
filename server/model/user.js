import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    requierd: true,
  },
});

const User = mongoose.model('user' ,userSchema)
export default User; 