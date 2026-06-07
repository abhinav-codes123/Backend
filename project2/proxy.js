import express from 'express'
import cors from 'cors'

const app=express();
app.use(cors());
const port=3000;
app.get('/data',async (req,res)=>{
    const response=await fetch('http://localhost:4000/data');
    const data=await response.json();
    data.push({
        id:4,
        title:"four content",
        content:"this is fourth data"
    })
    res.json(data);
})
app.listen(port);