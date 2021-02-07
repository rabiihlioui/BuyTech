import { TestBed } from '@angular/core/testing';

import { VisitorRouterGuardService } from './visitor-router-guard.service';

describe('VisitorRouterGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitorRouterGuardService = TestBed.get(VisitorRouterGuardService);
    expect(service).toBeTruthy();
  });
});
