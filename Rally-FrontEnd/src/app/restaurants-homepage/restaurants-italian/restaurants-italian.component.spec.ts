import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsItalianComponent } from './restaurants-italian.component';

describe('RestaurantsItalianComponent', () => {
  let component: RestaurantsItalianComponent;
  let fixture: ComponentFixture<RestaurantsItalianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsItalianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsItalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
