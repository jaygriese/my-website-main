import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTopic3Component } from './forum-topic3.component';

describe('ForumTopic3Component', () => {
  let component: ForumTopic3Component;
  let fixture: ComponentFixture<ForumTopic3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumTopic3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumTopic3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
