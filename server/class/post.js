// PostService.js
import Post from "../model/post.js";

class PostService {
  async createPost(data) {
    try {
      const post = new Post(data);
      await post.save();
      return "Post Saved Successfully";
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllPosts(category) {
    try {
      if (category) {
        return await Post.find({ categories: category });
      } else {
        return await Post.find({});
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getPostById(id) {
    try {
      return await Post.findById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updatePost(id, data) {
    try {
      const post = await Post.findById(id);
      if (!post) {
        throw new Error("Post Not Found");
      }
      await Post.findByIdAndUpdate(id, { $set: data });
      return "Post Updated Successfully";
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deletePost(id) {
    try {
      await Post.findByIdAndDelete({ _id: id });
      return "Post Deleted Successfully";
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default PostService;
