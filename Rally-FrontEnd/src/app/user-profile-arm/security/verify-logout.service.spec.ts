import { TestBed } from '@angular/core/testing';

import { VerifyLogoutService } from './verify-logout.service';

describe('VerifyLogoutService', () => {
  let service: VerifyLogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyLogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
