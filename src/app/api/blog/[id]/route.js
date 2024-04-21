import connectToDatabase from "@/lib/db/db";
import { Blog } from "@/lib/schemas/blog";

export async function POST(request,{params}) {
    const {id} = params
    const {userid} = await request.json()
    try {
        await connectToDatabase()
        const  findBlog = await Blog.findOne({_id:id,likes:{
            $elemMatch:{
                userid
            }
        }})
        if(findBlog){
            return Response.json({message:"Already Liked",status:401})
        }else{
            const updateBlog = await Blog.updateOne({_id: id},{ $push:{
               likes:{
                userid,
                liked:true
               }
            }})
            return Response.json({message:"updated",status:200})
        }

    } catch (error) {
        console.log(error);
        return Response.json({message:"internal server error",status:500})
    }
}

export async function GET(request,{params}){
    const {id} = params
    try {
        await connectToDatabase()
        const findBlog = await Blog.findOne({_id:id})
        return Response.json({message:"Success",blog:findBlog,status:200})
    } catch (error) {
        console.log(error);
        return Response.json({message:"internal server error",status:500})
    }
}


export async function PUT(request,{params}){
    const {id} = params
    const {comment,userid} = await request.json()
    try {
        await connectToDatabase()
        const updateWithcomment = await Blog.updateOne({_id:id},{$push:{comments:{comment,userid,commented:true}}} )
        return Response.json({message:"Success",status:200})
    } catch (error) {
        console.log(error);
        return Response.json({message:"Internal Server Error",status:500})
    }
}