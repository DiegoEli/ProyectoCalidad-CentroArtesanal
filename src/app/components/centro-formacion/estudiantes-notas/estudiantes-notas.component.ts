import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsignaturaModel } from 'src/app/shared/asignatura.model';
import { AsignaturaService } from 'src/app/shared/asignatura.service';
import { CalificacionesModel } from 'src/app/shared/calificaciones.model';
import { CalificacionesService } from 'src/app/shared/calificaciones.service';

@Component({
  selector: 'app-estudiantes-notas',
  templateUrl: './estudiantes-notas.component.html',
  styleUrls: ['./estudiantes-notas.component.css']
})
export class EstudiantesNotasComponent implements OnInit {
  
  calificaciones: Observable<CalificacionesModel[]> | undefined
  asignaturas: AsignaturaModel[] = [];

  constructor(
    private calificacionesService: CalificacionesService,
    private asignaturaService: AsignaturaService
  ) { }

  ngOnInit(): void {
    this.calificaciones = this.calificacionesService.obtenerCalificaciones();

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
