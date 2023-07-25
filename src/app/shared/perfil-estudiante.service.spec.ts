import { TestBed } from '@angular/core/testing';

import { PerfilEstudianteService } from './perfil-estudiante.service';

describe('PerfilEstudianteService', () => {
  let service: PerfilEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
