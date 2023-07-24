import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HorarioDocenteModel } from './horario-docente.model';

@Injectable({
  providedIn: 'root'
})
export class HorarioDocenteService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerHorarioDocentes() {
    return this.http.get<HorarioDocenteModel[]>(this.BASE_URL+'/horario_docentes');
  }

  obtenerHorarioDocente(id: string) {
    return this.http.get<HorarioDocenteModel[]>(`${this.BASE_URL}/horario_docentes/${id}`);
  }

  agregarHorarioDocente(horario_docente: HorarioDocenteModel) {
    return this.http.post<string>(`${this.BASE_URL}/horario_docentes/agregar`, horario_docente);
  }

  actualizarHorarioDocente(horario_docente: HorarioDocenteModel) {
    return this.http.put<string>(`${this.BASE_URL}/horario_docentes/actualizar/${horario_docente.idhorario_docente}`, horario_docente)
  }

  borrarHorarioDocente(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/horario_docentes/borrar/${id}`)
  }

}
