import connectToDatabase from "@/lib/db/db";
import { User } from "@/lib/schemas/user";
import bcrypt from 'bcryptjs'
export async function POST(request) {
    try {
        // const {name,email,password} = await request.json();
        const form = await request.formData()
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const profile = form.get('profile')
        const byte = await profile.arrayBuffer()
        const buffer = Buffer.from(byte)
        if(!name || !email || !password) {
            return Response.json({message:"Fields Required",status:400})
        }
        const oldUser = await User.find({email})
        if(oldUser.length > 0){
            return Response.json({message:"Error",status:401})
        }
        const hashedPass = await bcrypt.hash(password,10)
        await connectToDatabase()
        const newUser = await new User({name,email,password:hashedPass,profile:buffer})
        await newUser.save()
        return Response.json({message:"Success",status:200})
    } catch (error) {
        console.log(error);
    }
}