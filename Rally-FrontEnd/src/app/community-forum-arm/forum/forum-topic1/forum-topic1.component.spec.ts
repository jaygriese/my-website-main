import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTopic1Component } from './forum-topic1.component';

describe('ForumTopic1Component', () => {
  let component: ForumTopic1Component;
  let fixture: ComponentFixture<ForumTopic1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumTopic1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumTopic1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
