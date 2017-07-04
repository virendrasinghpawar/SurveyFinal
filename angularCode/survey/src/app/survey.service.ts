import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SurveyService {

  constructor(private http:Http) { }


addSurvey(survey){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let url = "http://localhost:3000/survey/addSurvey";
    return this.http.post(url, survey,{headers: headers})
      .map(res => res.json());
  }
  
  getSurvey(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let url = "http://localhost:3000/survey/getSurvey";
    return this.http.get(url,{headers:headers})
      .map(res => res.json());
  }
  
  getChoices(id){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let url = "http://localhost:3000/survey/getChoices/"+id;
    return this.http.get(url,{headers:headers})
      .map(res => res.json());
  }

  addVoteCount(id,choice){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let url = "http://localhost:3000/survey/addVoteCount/"+id+"/"+choice;
    return this.http.get(url,{headers:headers})
      .map(res => res.json());
  }

}
