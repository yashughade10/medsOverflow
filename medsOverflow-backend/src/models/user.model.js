import mongoose, { Schema } from 'mongoose';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true
    }, 
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    name : {
        type : String,
        required : true,
        trim : true,
        index : true
    },
    password : {
        type : String,
        required : [true,"Password is required"]
    },
    refreshToken : {
        type : String
    }
},{timestamps : true})


// Save the data whenever the password is get modified
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password, 10)
    next()
})


// Check whether entered password is correct or not (while login)
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

// Generate access token
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            email : this.email,
            password : this.password,
            name : this.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

// Generate refresh token
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User", userSchema)