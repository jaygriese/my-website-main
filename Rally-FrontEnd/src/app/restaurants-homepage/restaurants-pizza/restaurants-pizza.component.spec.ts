import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsPizzaComponent } from './restaurants-pizza.component';

describe('RestaurantsPizzaComponent', () => {
  let component: RestaurantsPizzaComponent;
  let fixture: ComponentFixture<RestaurantsPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
