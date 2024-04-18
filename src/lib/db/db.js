import mongoose from "mongoose";

let client = null

async function connectToDatabase() {
    try {
        
        if(client){
            return client
        }
    
        const connection = await mongoose.connect(process.env.MONGO_URI)
        client = connection
        console.log("connected");
        return client
    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase;