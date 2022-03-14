const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const postSchema = new Schema(
  {
        User: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        content: {
            type: String
        },
        User_Comment:  {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
                 },
        Comments: [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
                 }],
        upVotes: {
            type:Number
        },
        Community: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Community"
                },
        isAnonymous: {
            type: Boolean
        },
        
    }
   
)

module.exports = mongoose.model("Post", postSchema);