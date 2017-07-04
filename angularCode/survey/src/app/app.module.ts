import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {SurveyService} from './survey.service';
import { HttpModule } from '@angular/http';
import { ListSurveyComponent } from './list-survey/list-survey.component';
import { VisitSurveyComponent } from './visit-survey/visit-survey.component';
import { RouterModule }   from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
 


@NgModule({
  declarations: [
    AppComponent,
    ListSurveyComponent,
    VisitSurveyComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,HttpModule,RouterModule.forRoot([
       {
        path: '',
        component: HomeComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      
      {
        path: 'visit/:id',
        component: VisitSurveyComponent
      }
    ])
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
