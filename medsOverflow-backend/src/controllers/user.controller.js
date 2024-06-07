import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js";


const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access and refresh token")
    }
}


const registerUser = asyncHandler(async (req, res) => {
    const { email, username, name, password } = req.body;
    console.log(email);

    // Validate or check whether user entered all the data or not
    if ([email, username, name, password].some((field) => {
        field?.trim === ""
    })) {
        throw new ApiError(400, "All fields are required")
    }

    // Check whether user already exists or not
    const isUserExisted = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (isUserExisted) {
        throw new ApiError(409, "Email or username entered is already existed")
    }

    // Create the user
    const user = User.create({
        email,
        username,
        name,
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )

})


const loginUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body

    if (!username && !email) {
        throw new ApiError(400, "Email or username is required")
    }

    const user = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (!user) {
        throw new ApiError(400, "User does not exists")
    }

    const validatePassword = await user.isPasswordCorrect(password)

    if (!validatePassword) {
        throw new ApiError(401, "Invalid user credentials")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

    const loggedInUserData = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponse(
            200,
            {
                user: loggedInUserData, accessToken, refreshToken
            },
            "User logged in successfully"
        ))

})


const logoutUser = asyncHandler(async (req, res) => {
    console.log(req.user._id);
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged out"))
})



export {
    registerUser,
    loginUser,
    logoutUser,
}