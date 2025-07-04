import mongoose, { mongo } from 'mongoose'

const authSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    verificationToken : {
        type : String,
        default : ""
    },
    verificationTokenExpiresAt : {
        type : Date,
        default : Date.now
    },
    role : {
        type : String ,
        default : "user",
        enum : ["user","admin","staff"]
    }
},{timestamps : true})


const authModel = mongoose.model("auth",authSchema);

export default authModel;