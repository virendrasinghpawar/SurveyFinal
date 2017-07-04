import { Component, OnInit } from '@angular/core';
import {SurveyService} from '../survey.service';
@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent implements OnInit {
public surveyService: SurveyService
public survey:Array<Object>;
// searchRes: Array<Object>;
  constructor(surveyService:SurveyService) {

    this.surveyService=surveyService;
   }

  ngOnInit() {
 this.surveyService.getSurvey().subscribe(survey => {
      console.log("hsdf khsdf"+survey)
      this.survey=survey;
      console.log(this.survey)
    },
    err => {
      console.log(err);
      return false;
    });
  }




  //   console.log("i am called here");
  //  console.log("from method"+this.getsur());
  }



