import { Question } from '../models/question.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import mongoose from 'mongoose';

const createQuestion = asyncHandler(async (req, res, next) => {
    try {
        const { title, body, tags, user } = req.body;

        // if (!user) {
        //     throw new ApiError(400, "User is required to create a question");
        // }

        const newQuestion = await Question.create({
            title : req.body.title,
            body : req.body.body,
            tags : req.body.tags,
            user : req.body.user,
        });

        const createdQuestion = await Question.findById(newQuestion._id)
        console.log(await createQuestion);

        if (!createdQuestion) {
            throw new ApiError(500, "Something went wrong while creating the question");
        }

        return res.status(200).json(new ApiResponse(
            200,
            createdQuestion,
            "Question uploaded successfully"
        ));
    } catch (error) {
        next(error);
    }
});

const getQuestionDetails = asyncHandler(async (req, res) => {
    const {user} = req.params

    const question = await Question.aggregate([
        {
            $lookup: {
                from: "comments",
                let: { question_id: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ["$questionId", "$$question_id"]
                            }
                        }
                    },
                    {
                        $project: {
                            _id: 1,
                            comment: 1,
                            created_at: 1
                        }
                    }
                ],
                as: "comments"
            }
        },
        {
            $lookup: {
                from: "answers",
                let: { question_id: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ["$questionId", "$$question_id"]
                            }
                        }
                    },
                    {
                        $project: {
                            _id: 1,
                            answer: 1,
                            created_at: 1
                        }
                    }
                ],
                as: "answers"
            }
        },
        {
            $project: {
                _id: 1,
                title: 1,
                body: 1,
                tags: 1,
                createdAt: 1,
                comments: 1,
                answerDetails: { $first: "$answers" }
            }
        }
    ])

    if(!question?.length){
        throw new ApiError(400, "Questions not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(
        200,
        question,
        "Question details fetched successfully"
    ))
})

const getQuestionDetailsById = asyncHandler(async (req, res) => {
    const {user} = req.params

    const question = await Question.aggregate([
        {
            $match : {
                _id : new mongoose.Types.ObjectId(req.params.id)
            }
        },
        {
            $lookup: {
                from: "answers",
                let: { question_id: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ["$questionId", "$$question_id"]
                            }
                        }
                    },
                    {
                        $project: {
                            _id: 1,
                            answer: 1,
                            created_at: 1
                        }
                    }
                ],
                as: "answers"
            }
        },
        {
            $lookup: {
                from: "comments",
                let: { question_id: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ["$questionId", "$$question_id"]
                            }
                        }
                    },
                    {
                        $project: {
                            _id: 1,
                            questionId : 1,
                            user : 1,
                            comment: 1,
                            created_at: 1
                        }
                    }
                ],
                as: "comments"
            }
        },
        {
            $project: {
                __v : 0
            }
        }
    ])

    if(!question?.length){
        throw new ApiError(400, "Questions not found")
    }

    return res
    .status(200)
    .json(new ApiResponse(
        200,
        question,
        "Question details fetched successfully"
    ))
})

export { 
    createQuestion, 
    getQuestionDetails,
    getQuestionDetailsById
};
