import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitSurveyComponent } from './visit-survey.component';

describe('VisitSurveyComponent', () => {
  let component: VisitSurveyComponent;
  let fixture: ComponentFixture<VisitSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
