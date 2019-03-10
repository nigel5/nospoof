import { TestBed } from '@angular/core/testing';

import { NospoofService } from './nospoof.service';

describe('NospoofService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NospoofService = TestBed.get(NospoofService);
    expect(service).toBeTruthy();
  });
});
