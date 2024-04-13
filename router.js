const express = require('express')
const app = express()
app.use((req,res,next)=>{
    console.log("this is a middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("this is another middleware");
  res.send("<h2> Welcome to Express.js </h2>")
})

app.listen(7000)