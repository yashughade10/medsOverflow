import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { createQuestion, getQuestionDetails, getQuestionDetailsById } from "../controllers/question.controller.js";
import { uploadAnswer } from "../controllers/answer.controller.js";
import { uploadComment } from "../controllers/comment.controller.js";

const router = Router()

// Register api route
router.route("/register").post(registerUser);

// Login api route
router.route("/login").post(loginUser);

// Secure Logout api route
router.route("/logout").post(verifyJWT, logoutUser)

// Create question api
router.route("/question").get(getQuestionDetails).post(createQuestion)

// Create question api/ get the data for specific user using id
router.route("/question/:id").get(getQuestionDetailsById).post(createQuestion)

// Answer api route
router.route("/answer").post(uploadAnswer)

// Answer api route
router.route("/comment").post(uploadComment)


export default router