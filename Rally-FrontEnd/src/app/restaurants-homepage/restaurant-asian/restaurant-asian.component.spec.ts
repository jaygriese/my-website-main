import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAsianComponent } from './restaurant-asian.component';

describe('RestaurantAsianComponent', () => {
  let component: RestaurantAsianComponent;
  let fixture: ComponentFixture<RestaurantAsianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAsianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAsianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
