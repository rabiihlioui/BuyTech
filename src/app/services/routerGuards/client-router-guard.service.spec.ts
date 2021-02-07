import { TestBed } from '@angular/core/testing';

import { ClientRouterGuardService } from './client-router-guard.service';

describe('ClientRouterGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientRouterGuardService = TestBed.get(ClientRouterGuardService);
    expect(service).toBeTruthy();
  });
});
