import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String
    },


},{timestamps:true}) //CreatedAt-timestamp at which user is created & updateAt-timsetamp at which user is updated

const User=mongoose.model("User",userSchema)
export default User