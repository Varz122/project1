
const express = require('express')
const router = express.Router();
router.get('/',(req,res,next)=>{
    
    res.send("<h2> Welcome to Express.js </h2>")
  })
  module.exports = router;