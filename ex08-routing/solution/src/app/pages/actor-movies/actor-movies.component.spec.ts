import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorMoviesComponent } from './actor-movies.component';

describe('ActorMoviesComponent', () => {
  let component: ActorMoviesComponent;
  let fixture: ComponentFixture<ActorMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActorMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
