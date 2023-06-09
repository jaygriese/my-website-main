import { TestBed } from '@angular/core/testing';

import { ResourceFilterService } from './resource-filter.service';

describe('ResourceFilterService', () => {
  let service: ResourceFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
