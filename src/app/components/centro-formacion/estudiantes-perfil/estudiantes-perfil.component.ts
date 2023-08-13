import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PerfilEstudianteModel } from 'src/app/shared/perfil-estudiante.model';
import { PerfilEstudianteService } from 'src/app/shared/perfil-estudiante.service';

@Component({
  selector: 'app-estudiantes-perfil',
  templateUrl: './estudiantes-perfil.component.html',
  styleUrls: ['./estudiantes-perfil.component.css']
})
export class EstudiantesPerfilComponent {
  
  estudiantes: Observable<PerfilEstudianteModel[]> | undefined

  constructor(
    private perfilEstudianteService: PerfilEstudianteService,
  ) {}

  ngOnInit(): void {
    this.estudiantes = this.perfilEstudianteService.obtenerPerfilEstudiantes();
  }

}
