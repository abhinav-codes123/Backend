import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// import dotenv from "dotenv"
// dotenv.config({
//     path:'./env'
// })

async function connectDB(){
    try{
        console.log("url output",process.env.MONGODB_URL)
            const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

            console.log(`\n MongoDB connected !! DB host : ${connectionInstance}`)
        }
        catch(error){
            console.log("MongoDB connection error : ",error);
            process.exit(1);
        }
}

export default connectDB
