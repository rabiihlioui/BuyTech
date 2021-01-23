import { TestBed } from '@angular/core/testing';

import { ActivateMenuItemService } from './activate-menu-item.service';

describe('ActivateMenuItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivateMenuItemService = TestBed.get(ActivateMenuItemService);
    expect(service).toBeTruthy();
  });
});
