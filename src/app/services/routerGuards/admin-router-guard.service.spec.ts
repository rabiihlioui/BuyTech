import { TestBed } from '@angular/core/testing';

import { AdminRouterGuardService } from './admin-router-guard.service';

describe('AdminRouterGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminRouterGuardService = TestBed.get(AdminRouterGuardService);
    expect(service).toBeTruthy();
  });
});
