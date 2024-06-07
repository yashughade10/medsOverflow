import mongoose, { Schema } from "mongoose";

const answerSchema = new Schema({
    questionId : {
        type : Schema.Types.ObjectId,
        ref : "Question"
    },
    answer : {
        type : String,
        required : true
    },
    user : {
        type : Object
    },
    commentId : {
        type : Schema.Types.ObjectId,
        ref : "Comment"
    }
}, {timestamps : true})

export const Answer = mongoose.model("Answer", answerSchema)