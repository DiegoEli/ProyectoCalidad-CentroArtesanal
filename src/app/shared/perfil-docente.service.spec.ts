import { TestBed } from '@angular/core/testing';

import { PerfilDocenteService } from './perfil-docente.service';

describe('PerfilDocenteService', () => {
  let service: PerfilDocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilDocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
