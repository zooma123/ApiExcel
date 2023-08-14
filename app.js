const express = require("express");
const http = require("http");
const url = require("url");
const morgan = require("morgan");
 const ResultRouter = require('./routes/resultroute')
const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use((req,res,next)=>{
  req.requestTime = new Date().toISOString();
  console.log(req.headers)
  
  next();
  })
app.use("/api/results" , ResultRouter)
app.all("*" , (req,res,next)=>{
res.status(404).json({


status : "fail" ,
message : `Cant Find ${req.originalUrl} on This Server`

})


})




module.exports = app;