import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDetailsComponent } from './actor-details.component';

describe('ActorDetailsComponent', () => {
  let component: ActorDetailsComponent;
  let fixture: ComponentFixture<ActorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActorDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
