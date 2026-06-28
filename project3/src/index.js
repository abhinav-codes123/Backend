// nodemon = restart server when we save code 
// import mongoose from 'mongoose'
// import { DB_NAME } from './constants';
// require('dotenv').config()

import dotenv from 'dotenv'
import connectDB from "./db/index.js";
dotenv.config({
    path: './.env'
})
import {app} from './app.js'


connectDB()
.then(()=>{
    app.get('/data',(req,res)=>{
        res.send('<h1>this is backend developer</h1>') 
    })
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(`data base connection error : ${error}`);
})


// import express from 'express'

// const app=express()
// const port=process.env.PORT || 3000;

// ;( async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error : ",error)
//             throw error;
//         }) 

//         app.listen(port,()=>{
//             console.log(`app is listening on port ${port}`)
            
//         })
//     }
//     catch(error){
//         console.log("error : ",error);
//         throw error;
//     }
// })();



// // await mongoose.connect(...)  = this connects database 
// // app.listen(...)      = this starts server

// // Only start server after database is ready.

// // app.listen(3000);
// // Reserve port 3000 for app