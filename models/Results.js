const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const ResultSchema = new mongoose.Schema({
  seating_no :{

  type : Number 

}
, arabic_name: {
type :String , 
} ,
total_degree: {type : Number} ,

student_case:{
type :Number , 

}, 


})
const Result = mongoose.model("Result" , ResultSchema)

module.exports = Result ;
