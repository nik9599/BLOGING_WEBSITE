import Comment from "../model/comment.js";

export const newComment = async (req, res) => {
  try {
    const comment = await Comment(req.body);
    comment.save();
    res.status(200).json({ msg: "comment saved successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getComments  = async(req , res) =>{
    try{
          const comments = await Comment.find({postId : req.params.id});

          res.status(200).json(comments);

    }catch(error){
        res.status(500).json({msg : error.message});

    }
}

export const deletComment = async(req , res)=>{
       try {
             await Comment.findByIdAndDelete({_id :req.params.id});

            // const comment  = await Comment.findbyId(req.params.id)
            // await comment.delete();

             res.status(200).json({msg:"comment deleted"});

       } catch (error) {
          res.status(500).json({msg : error.message})
       }
}