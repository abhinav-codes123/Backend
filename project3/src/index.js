// nodemon = restart server when we save code 
import mongoose from 'mongoose'
import { DB_NAME } from './constants';
import express from 'express'

const app=express()
const port=process.env.PORT || 3000;

;( async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error : ",error)
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
})();



// await mongoose.connect(...)  = this connects database 
// app.listen(...)      = this starts server

// Only start server after database is ready.

// app.listen(3000);
// Reserve port 3000 for app