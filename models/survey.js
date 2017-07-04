const mongoose = require('mongoose');
const config = require('../config/database');

const surveySchema = mongoose.Schema({
  title: {
    type: String,
     unique: true 
  },
  Choices: {
    type: [
    {
    choice : String,
    count : Number
    }
    ],
    required: true
  },
  createdAt:{ 
      type: Date,
     default: Date.now
     },
    count:{
        type:Number,
        default:0
    },
  
});

//const choice = mongoose.Schema({
//    option:{
//    type:String
//    }
//    count:{
//    type:Number,
//    default:0
//}
//})




const Survey = module.exports = mongoose.model('survey', surveySchema);