import Post from "../model/post.js";

export const creatPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    post.save();
    return res.status(200).json("Post Saved Succesfully");
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAllPost = async (req, res) => {
  let category = req.query.category;

  let posts;

  try {
    if (category) {
      //finding post by category
      posts = await Post.find({ categories: category });
    } else {
      posts = await Post.find({});
    }

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getPost = async (req, res) => {

  try {
    //finding post by id
    const post = await Post.findById(req.params.id);

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
   
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "Post Not Found" });
    }

    await Post.findByIdAndUpdate(req.params.id, { $set: req.body });

    return res.status(200).json({ msg: "Post Updated succesfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const deletPost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete({ _id: req.params.id });

    return res.status(200).json({ msg: "Post Deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
