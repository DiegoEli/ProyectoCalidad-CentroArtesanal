import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresIngresoCalificacionesComponent } from './profesores-ingreso-calificaciones.component';

describe('ProfesoresIngresoCalificacionesComponent', () => {
  let component: ProfesoresIngresoCalificacionesComponent;
  let fixture: ComponentFixture<ProfesoresIngresoCalificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesoresIngresoCalificacionesComponent]
    });
    fixture = TestBed.createComponent(ProfesoresIngresoCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
