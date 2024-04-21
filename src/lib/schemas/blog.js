import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type:String
    },
    image:{
        type:Buffer
    },
    blogText:{
        type:String
    },
    likes:{
            type:[{
                userid:String,
                liked:Boolean
            }]
    },
    comments:{
            type:[{
                userid:String,
                comment:String,
                commented:Boolean
            }]
    },
    createdby:{
        type:String
    },
    date:{
        type:String
    }

})

export const Blog = mongoose.models.blog || mongoose.model('blog',blogSchema)