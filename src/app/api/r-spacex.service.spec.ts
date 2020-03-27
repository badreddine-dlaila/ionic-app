import { TestBed } from '@angular/core/testing';

import { RSpacexService } from './r-spacex.service';

describe('RSpacexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RSpacexService = TestBed.get(RSpacexService);
    expect(service).toBeTruthy();
  });
});
