import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTopic2Component } from './forum-topic2.component';

describe('ForumTopic2Component', () => {
  let component: ForumTopic2Component;
  let fixture: ComponentFixture<ForumTopic2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumTopic2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumTopic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
