var Survey=require('../models/survey')

let mongoose = require('mongoose');



function getSurveys(req, res) {
    //Query the DB and if no errors, send all the Surveys
     Survey.find({},(err,surveys)=>{
        if(err){
            console.log("there is an err"+err);
        }
//        console.log(surveys);
        
        res.json(surveys);
    });
    
 
}



function postSurvey(req, res) {
    //Query the DB and if no errors, send all the Surveys
   let newSurvey = new Survey({
    title:  req.body.Title,
    Choices: req.body.choices,
      });

    

newSurvey.save();
res.send(newSurvey);
 
}

module.exports = { getSurveys,postSurvey};



 