import PostService from "../class/post.js";

const postService = new PostService();


// creating new psot

export const creatPost = async (req, res) => {
  try {
    const result = await postService.createPost(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

//fetching all the post

export const getAllPost = async (req, res) => {
  let category = req.query.category;

  try {
    const posts = await postService.getAllPosts(category);
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// geting post by id

export const getPost = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// updateing the post

export const updatePost = async (req, res) => {
  try {
    const result = await postService.updatePost(req.params.id, req.body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


// deleting the post

export const deletPost = async (req, res) => {
  try {
    const result = await postService.deletePost(req.params.id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
