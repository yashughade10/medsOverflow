import mongoose, { Schema } from 'mongoose';

const questionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    user: {
        type: Object
    },
    commentId: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
}, { timestamps: true });

export const Question = mongoose.model('Question', questionSchema);