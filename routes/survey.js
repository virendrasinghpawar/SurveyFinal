const express = require('express');
const router = express.Router();

const config = require('../config/database');
const Survey = require('../models/survey');

const survey=require('../controller/survey');


// Register
router.post('/addSurvey', (req, res, next) => {
  let newSurvey = new Survey({
    title:  req.body.Title,
    Choices: req.body.choices,
    
  });
    

newSurvey.save();
res.send(newSurvey);
//    survey.postSurvey();
    

//   User.addUser(newUser, (err, user) => {
//     if(err){
//       res.json({success: false, msg:'Failed to register user'});
//     } else {
//       res.json({success: true, msg:'User registered'});
//     }
//   });
});






router.get('/getSurvey', (req, res, next) => {
//  res.json("get work perfectly");

    

//    survey.getSurvey;
    
    
    Survey.find({},(err,surveys)=>{
        if(err){
            console.log("there is an err");
        }
//        console.log(surveys);
        
        res.json(surveys);
    });
    
    
               });

router.get('/getChoices/:id', (req, res, next) => {
//  res.json("get work perfectly");
    Survey.findById(req.params.id,
                           
                            (err,surveys)=>{
        if(err){
            console.log("there is an err");
        }
//        console.log(surveys);
        res.json(surveys);
    });
  });

router.get('/addVoteCount/:id/:c',(req,res,next)=>{
 Survey.findById(req.params.id,(err,surveys)=>{
                           
                            
        if(err){
            console.log("there is an err");
        }
        console.log(surveys);
     surveys.count+=1;
     surveys.Choices.forEach(ch => {
            if(ch.choice.trim()==req.params.c.trim()){
               ch.count+=1;
               
               }
        });
     surveys.save();
     
     
     
        res.json(surveys);
    });
  });









module.exports = router;