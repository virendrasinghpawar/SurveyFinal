import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {SurveyService} from '../survey.service'
import { RouterModule,Router,ActivatedRoute  }   from '@angular/router';
// import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-visit-survey',
  templateUrl: './visit-survey.component.html',
  styleUrls: ['./visit-survey.component.css']
})
export class VisitSurveyComponent implements OnInit {
public surveyService :SurveyService;

public survey:Object[]=[];
public Title:String ="";
   public myForm: FormGroup;
public choices:String[]=[];
public id:any;
  constructor(surveyService:SurveyService,private _fb: FormBuilder,private route:ActivatedRoute,
   private router: Router) {
    this.surveyService=surveyService;

   }

// initChoice() {
//         return this._fb.group({
//             choice: [''],
            
//         });


// addChoice() {
//         const control = <FormArray>this.myForm.controls['choices'];
//         control.push(this.initChoice());
//     }




  ngOnInit() {


    this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number

console.log("here i am about to get id"+this.id);
       // In a real app: dispatch action to load the details here.
    });
  
    this.surveyService.getChoices(this.id).subscribe(survey => {
      // console.log(survey.choice)
      // this.survey=survey
      // this.survey.forEach(element => {
      //   console.log(element)
      // });
      console.log(survey)

      this.survey=survey.Choices;
      this.Title=survey.title;
      console.log(this.survey);
    },
    err => {
      console.log(err);
      return false;
    });
  }

giveVote(myChoice){
// console.log("here are my values"+myChoice)
this.surveyService.addVoteCount(this.id,myChoice).subscribe(survey => {
      // console.log(survey.choice)
      // this.survey=survey
      // this.survey.forEach(element => {
      //   console.log(element)
      // });
      console.log(survey)

      this.survey=survey.Choices;
      this.Title=survey.title;
      console.log(this.survey);

      //  this.flashMessage.show('you have successfully submitted the survey', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/']);
    },
    err => {
      console.log(err);
      return false;
    });
  }


}
