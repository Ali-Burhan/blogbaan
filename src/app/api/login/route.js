import connectToDatabase from "@/lib/db/db";
import { User } from "@/lib/schemas/user";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
export async function POST(request) {
    try {
        const {email,password} = await request.json()
        await connectToDatabase()
        const findUser = await User.findOne({email})
        if(findUser){
            const comparePass = await bcrypt.compare(password,findUser.password)
            if(comparePass){
                const token = await jwt.sign({findUser},process.env.SECRET_KEY)
                    cookies().set('blogbaan',token)     
                    return Response.json({message:"Success",status:200,user:findUser,token:token})
            }
        }
        else{
            return Response.json({message:"Error",status:402})
        }
    } catch (error) {
        
    }
}