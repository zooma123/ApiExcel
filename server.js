const app =require('./app')
const dotenv = require("dotenv");
dotenv.config();
const url =process.env.MONGO_URI 


const mongoose = require('mongoose')
mongoose.connect( " mongodb+srv://admin:500400300200@cluster0.ot1dm.mongodb.net/natours?retryWrites=true&w=majority" ,{
useNewUrlParser : true , 
useUnifiedTopology : true
, useCreateIndex : true ,
useFindAndModify : true ,
 useFindAndModify: false 
}).then(con =>{

console.log("Connected To Data Base")

})






app.listen(3000, () => {
  console.log("Runnig on port 3000");
});