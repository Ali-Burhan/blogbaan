import connectToDatabase from "@/lib/db/db"
import { User } from "@/lib/schemas/user"

export async function GET(request){
    try {
        await connectToDatabase()
        const users = await User.find()
        return Response.json({mesasg:"users",users,status:200})
    } catch (error) {
        return Response.json({message:"Internal Server Error",status:500})
    }
}