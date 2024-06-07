import { Comment } from '../models/comment.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const uploadComment = asyncHandler(async (req, res, next) => {
    try {
        const { title, body, tags, user } = req.body;

        // if (!user) {
        //     throw new ApiError(400, "User is required to create a question");
        // }

        const newComment = await Comment.create({
            questionId : req.body.questionId,
            comment : req.body.comment,
            user : req.body.user
        });

        const createdComment = await Comment.findById(newComment._id)

        if (!createdComment) {
            throw new ApiError(500, "Something went wrong while creating the answer");
        }

        return res.status(200).json(new ApiResponse(
            200,
            createdComment,
            "Answer uploaded successfully"
        ));
    } catch (error) {
        console.log("erro while creating answer");
        next(error);
    }
});

export { uploadComment };
