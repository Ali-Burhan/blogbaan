import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    profile:{
        type:Buffer
    },

})

export const User = mongoose.models.user || mongoose.model('user',userSchema)