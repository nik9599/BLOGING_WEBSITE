import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    name :{
        type  : String,
        requierd  :true
    },
    username :{
        type  : String,
        requierd  :true
    },
    postId :{
        type  :String,
        requierd : true
    },
    date : {
        type :  Date , 
        requierd : true
    },
    comments : {
        type  :String,
        requierd :true
    }
})

const comment = mongoose.model('comment' , commentSchema);

export default comment;