import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
    questionId : {
        type : Schema.Types.ObjectId,
        ref : "Question"
    },
    comment : {
        type : String,
        required : true
    },
    user : {
        type : Object
    }
}, {timestamps : true})

export const Comment = mongoose.model("Comment", commentSchema)