import { Answer } from '../models/answer.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const uploadAnswer = asyncHandler(async (req, res, next) => {
    try {
        const { title, body, tags, user } = req.body;

        // if (!user) {
        //     throw new ApiError(400, "User is required to create a question");
        // }

        const newAnswer = await Answer.create({
            questionId : req.body.questionId,
            answer : req.body.answer,
            user : req.body.user
        });

        const createdAnswer = await Answer.findById(newAnswer._id)

        if (!createdAnswer) {
            throw new ApiError(500, "Something went wrong while creating the answer");
        }

        return res.status(200).json(new ApiResponse(
            200,
            createdAnswer,
            "Answer uploaded successfully"
        ));
    } catch (error) {
        console.log("erro while creating answer");
        next(error);
    }
});


const getAnswer = asyncHandler(async (req, res) => {
    
})

export { uploadAnswer, getAnswer };
