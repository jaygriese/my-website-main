import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsAmericanComponent } from './reviews-american.component';

describe('ReviewsAmericanComponent', () => {
  let component: ReviewsAmericanComponent;
  let fixture: ComponentFixture<ReviewsAmericanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsAmericanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsAmericanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
