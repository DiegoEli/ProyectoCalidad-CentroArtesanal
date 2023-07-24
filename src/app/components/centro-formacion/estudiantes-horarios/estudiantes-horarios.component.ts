import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsignaturaModel } from 'src/app/shared/asignatura.model';
import { AsignaturaService } from 'src/app/shared/asignatura.service';
import { HorarioEstudianteModel } from 'src/app/shared/horario-estudiante.model';
import { HorarioEstudianteService } from 'src/app/shared/horario-estudiante.service';

@Component({
  selector: 'app-estudiantes-horarios',
  templateUrl: './estudiantes-horarios.component.html',
  styleUrls: ['./estudiantes-horarios.component.css']
})
export class EstudiantesHorariosComponent implements OnInit{

  horario_estudiantes: Observable<HorarioEstudianteModel[]> | undefined
  asignaturas: AsignaturaModel[] = [];

  constructor(
    private horarioEstudianteService: HorarioEstudianteService,
    private asignaturaService: AsignaturaService
  ) {}

  ngOnInit(): void {
    this.horario_estudiantes = this.horarioEstudianteService.obtenerHorarioEstudiantes();

    this.asignaturaService.obtenerAsignaturas().subscribe(
      (asignaturas: AsignaturaModel[]) => {
        this.asignaturas = asignaturas; // Almacena las asignaturas en el arreglo local
      }
    );

  }

  obtenerNombreAsignatura(idAsignatura: string): string {
    const asignatura = this.asignaturas.find(asig => asig.idasignatura === idAsignatura);
    return asignatura ? asignatura.nombre_asignatura : 'Asignatura no encontrada';
  }

}
