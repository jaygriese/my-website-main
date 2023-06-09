import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinEditComponent } from './join-edit.component';

describe('JoinEditComponent', () => {
  let component: JoinEditComponent;
  let fixture: ComponentFixture<JoinEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
