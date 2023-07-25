import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsignaturaModel } from 'src/app/shared/asignatura.model';
import { AsignaturaService } from 'src/app/shared/asignatura.service';
import { HorarioDocenteModel } from 'src/app/shared/horario-docente.model';
import { HorarioDocenteService } from 'src/app/shared/horario-docente.service';
import { ModuloModel } from 'src/app/shared/modulo.model';
import { ModuloService } from 'src/app/shared/modulo.service';

@Component({
  selector: 'app-profesores-horarios',
  templateUrl: './profesores-horarios.component.html',
  styleUrls: ['./profesores-horarios.component.css']
})
export class ProfesoresHorariosComponent implements OnInit {
  
  horario_docentes: Observable<HorarioDocenteModel[]> | undefined
  asignaturas: AsignaturaModel[] = [];
  modulos: ModuloModel[] = [];

  constructor(
    private horarioDocenteService: HorarioDocenteService,
    private asignaturaService: AsignaturaService,
    private moduloService: ModuloService
  ) {}

  ngOnInit(): void {
    this.horario_docentes = this.horarioDocenteService.obtenerHorarioDocentes();

    this.asignaturaService.obtenerAsignaturas().subscribe(
      (asignaturas: AsignaturaModel[]) => {
        this.asignaturas = asignaturas; // Almacena las asignaturas en el arreglo local
      }
    );

    this.moduloService.obtenerModulos().subscribe(
      (modulos: ModuloModel[]) => {
        this.modulos = modulos; // Almacena las modulos en el arreglo local
      }
    );

  }

  obtenerNombreAsignatura(idAsignatura: string): string {
    const asignatura = this.asignaturas.find(asig => asig.idasignatura === idAsignatura);
    return asignatura ? asignatura.nombre_asignatura : '¡Asignatura no encontrada!';
  }

  obtenerNombreModulo(idModulo: string): string {
    const modulo = this.modulos.find(modu => modu.idmodulo === idModulo);
    return modulo ? modulo.nombre_modulo : '¡Modulo no encontrado!';
  }

}
