import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAmericanComponent } from './restaurant-american.component';

describe('RestaurantAmericanComponent', () => {
  let component: RestaurantAmericanComponent;
  let fixture: ComponentFixture<RestaurantAmericanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantAmericanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAmericanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
