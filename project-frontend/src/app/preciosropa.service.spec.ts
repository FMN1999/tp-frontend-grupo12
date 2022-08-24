import { TestBed } from '@angular/core/testing';

import { PreciosropaService } from './preciosropa.service';

describe('PreciosropaService', () => {
  let service: PreciosropaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreciosropaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
