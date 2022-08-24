import { TestBed } from '@angular/core/testing';

import { TiporopasService } from './tiporopas.service';

describe('TiporopasService', () => {
  let service: TiporopasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiporopasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
