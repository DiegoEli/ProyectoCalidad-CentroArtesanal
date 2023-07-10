import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesAspiranteBecaComponent } from './estudiantes-aspirante-beca.component';

describe('EstudiantesAspiranteBecaComponent', () => {
  let component: EstudiantesAspiranteBecaComponent;
  let fixture: ComponentFixture<EstudiantesAspiranteBecaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudiantesAspiranteBecaComponent]
    });
    fixture = TestBed.createComponent(EstudiantesAspiranteBecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
