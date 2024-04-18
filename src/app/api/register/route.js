import connectToDatabase from "@/lib/db/db";
import { User } from "@/lib/schemas/user";

export async function GET(request) {
    try {
        
        await connectToDatabase()
        const newUser = await new User({name:"Ali",email:"ali@gmail.com",password:"password"})
        await newUser.save()
        return Response.json({message:"Success"})
    } catch (error) {
        console.log(error);
    }
}