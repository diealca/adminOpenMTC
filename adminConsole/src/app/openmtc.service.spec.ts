import { TestBed } from '@angular/core/testing';

import { OpenmtcService } from './openmtc.service';

describe('OpenmtcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenmtcService = TestBed.get(OpenmtcService);
    expect(service).toBeTruthy();
  });
});
