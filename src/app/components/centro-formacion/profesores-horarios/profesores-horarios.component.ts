import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HorarioDocenteModel } from 'src/app/shared/horario-docente.model';
import { HorarioDocenteService } from 'src/app/shared/horario-docente.service';

@Component({
  selector: 'app-profesores-horarios',
  templateUrl: './profesores-horarios.component.html',
  styleUrls: ['./profesores-horarios.component.css']
})
export class ProfesoresHorariosComponent implements OnInit {
  
  horario_docentes: Observable<HorarioDocenteModel[]> | undefined

  constructor(
    private horarioDocenteService: HorarioDocenteService
  ) {}

  ngOnInit(): void {
    this.horario_docentes = this.horarioDocenteService.obtenerHorarioDocentes();
  }

}
