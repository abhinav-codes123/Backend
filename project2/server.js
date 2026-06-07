import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
const app=express();

// when we use static, we dont need cors, static makes frontend and backend at same origin.
app.use(express.static('frontend'));


// app.get('/',(req,res)=>{
//     res.send('server is ready');
// })
// in origin: till port number
// app.use(cors({origin:"http://127.0.0.1:5500"}));
// using this method, works for all routers

// if we need to allow only specific routers, then this 2nd method of passing cors in that router.

// this is for particular router
// app.get('/data',cors({origin:"http://127.0.0.1:5500"}),(req,res)=>{
app.get('/data',(req,res)=>{
    const data=[
        {
            id:1,
            title:'one data',
            content:'this is first data'
        },
        {
            id:3,
            title:'two data',
            content:'this is second data'
        },
        {
            id:3,
            title:'three data',
            content:'this is third data'
        },
    ]
    res.send(data);
})

const port=process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
})



// we can pass an array of urls of allowed frontends, when we have more than one frontends

// const allowedOrigins = [
//     "https://app1.com",
//     "https://app2.com",
//     "https://admin.app2.com"
// ];

// app.use(cors({
//     origin: allowedOrigins
// }));


// allow for all

// app.use(cors());

// or

// app.use(cors({
//     origin: '*'
// }));


// How to find the origin?

// Take the URL:

// http://127.0.0.1:5500/project2/frontend/index.html

// Remove everything after the port:

// http://127.0.0.1:5500

// That's the origin.

// Another example:

// https://myapp.vercel.app/dashboard/profile

// Origin:

// https://myapp.vercel.app