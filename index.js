// console.log("hello backend")
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hello',(req,res)=>{
    res.send('hello');
})
app.get('/heading',(req,res)=>{
    res.send('<h1>this is a heading</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})