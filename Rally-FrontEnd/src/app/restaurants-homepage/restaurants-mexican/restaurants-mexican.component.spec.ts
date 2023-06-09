import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsMexicanComponent } from './restaurants-mexican.component';

describe('RestaurantsMexicanComponent', () => {
  let component: RestaurantsMexicanComponent;
  let fixture: ComponentFixture<RestaurantsMexicanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsMexicanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsMexicanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
