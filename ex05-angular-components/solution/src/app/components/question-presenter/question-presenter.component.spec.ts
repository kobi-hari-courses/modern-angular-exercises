import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPresenterComponent } from './question-presenter.component';

describe('QuestionPresenterComponent', () => {
  let component: QuestionPresenterComponent;
  let fixture: ComponentFixture<QuestionPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
