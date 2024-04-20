import connectToDatabase from "@/lib/db/db";
import { Blog } from "@/lib/schemas/blog";

export async function POST(request) {
    try {
        const form = await request.formData()
        const title = form.get('title')
        const image = form.get("image")
        const createdby = form.get('createdby')
        const blogText = form.get('blogText')
        const date = form.get('date')
        const byte =await image.arrayBuffer()
        const buffer = Buffer.from(byte)
        if(!title || !blogText){
            return Response.json({message:"Failed",status:401})
        }
        await connectToDatabase()
        const newBlog = await new Blog({title,image:buffer,blogText,createdby,date})
        await newBlog.save()
        return Response.json({message:"Success",status:200})

    } catch (error) {
     console.log(error);   
    }
}

export async function GET(request) {
    try {
        await connectToDatabase()
        const allBlogs = await Blog.find()
        return Response.json({allBlogs,status:200})
    } catch (error) {
        console.log(error);
    }
}