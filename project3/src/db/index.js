import mongoose from "mongoose";
import { DB_NAME } from "../constants";

async function connectDB(){
    try{
            await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            app.on("error",(error)=>{
                console.log("errror : ",error)
                throw error;
            })
    
            app.listen(port,()=>{
                console.log(`app is listening on port ${port}`)
                
            })
        }
        catch(error){
            console.log("error : ",error);
            throw error;
        }
}
