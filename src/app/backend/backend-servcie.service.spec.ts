import { TestBed } from '@angular/core/testing';

import { BackendServcieService } from './backend-servcie.service';

describe('BackendServcieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendServcieService = TestBed.get(BackendServcieService);
    expect(service).toBeTruthy();
  });
});
