import { TestBed } from '@angular/core/testing';

import { HorarioEstudianteService } from './horario-estudiante.service';

describe('HorarioEstudianteService', () => {
  let service: HorarioEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorarioEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
