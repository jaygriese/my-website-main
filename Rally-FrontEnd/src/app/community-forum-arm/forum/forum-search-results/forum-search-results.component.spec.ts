import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumSearchResultsComponent } from './forum-search-results.component';

describe('ForumSearchResultsComponent', () => {
  let component: ForumSearchResultsComponent;
  let fixture: ComponentFixture<ForumSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
