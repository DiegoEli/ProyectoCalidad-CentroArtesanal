import { TestBed } from '@angular/core/testing';

import { HorarioDocenteService } from './horario-docente.service';

describe('HorarioDocenteService', () => {
  let service: HorarioDocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorarioDocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
