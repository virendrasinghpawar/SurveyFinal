var expect  = require('chai').expect;
var mongoose =require('mongoose');
var request = require('request');
var assert = require('assert');
var Survey=require('../models/survey');

let chaiHttp = require('chai-http');
//let server = require('../server');

let chai=require('chai');
let should = chai.should();
chai.use(chaiHttp);
//Our parent block
//describe('Survey are now removed from db', () => {
//    beforeEach((done) => { //Before each test we empty the database
//        Survey.remove({}, (err) => { 
//           done();         
//        });     
//    });




describe('Surveys', () => {
    beforeEach((done) => { //Before each test we empty the database
        Survey.remove({}, (err) => {
            if(err)
            console.log("there is an error"+err);
           done();         
        });     
    });
/*
  * Test the /GET route
  */
//  describe('/GET book', () => {
//      it('it should GET all the Survey', (done) => {
//        chai.request('http://localhost:3000/survey')
//            .get('/getSurvey')
//            .end((err, res) => {
//                res.should.have.status(200);
//                res.body.should.be.a('array');
//                res.body.length.should.be.eql(19);
//              done();
//            });
//      });
//  });

});












it('get Survey  page status', function() {
    request('http://localhost:3000/survey/getSurvey' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
});




describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect(-1).to.equal ([1,2,3].indexOf(4));
    });
  });
});




//describe('Survey', function() {
//  describe('#save()', function() {
//    it('should save without error', function(done) {
//      var survey = new survey();
//      survey.save(function(err) {
//        if (err) done(err);
//        else done();
//      });
//    });
//  });
//});