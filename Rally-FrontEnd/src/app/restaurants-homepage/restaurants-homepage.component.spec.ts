import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsHomepageComponent } from './restaurants-homepage.component';

describe('RestaurantsHomepageComponent', () => {
  let component: RestaurantsHomepageComponent;
  let fixture: ComponentFixture<RestaurantsHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
