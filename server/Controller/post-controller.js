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
      posts = await Post.find({categories : category});
    } else {
      posts = await Post.find({});
    }

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


export const getPost = async (req , res)=>{
         try {
            const post = await Post.findById(req.params.id);

            return res.status(200).json(post)

         } catch (error) {
              return res.status(500).json({msg: error.message})
         }
}