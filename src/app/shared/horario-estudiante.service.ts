import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HorarioEstudianteModel } from './horario-estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class HorarioEstudianteService {
    
  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerHorarioEstudiantes() {
    return this.http.get<HorarioEstudianteModel[]>(this.BASE_URL+'/horario_estudiantes');
  }

  obtenerHorarioEstudiante(id: string) {
    return this.http.get<HorarioEstudianteModel[]>(`${this.BASE_URL}/horario_estudiantes/${id}`);
  }

  agregarHorarioEstudiante(horario_estudiante: HorarioEstudianteModel) {
    return this.http.post<string>(`${this.BASE_URL}/horario_estudiantes/agregar`, horario_estudiante);
  }

  actualizarHorarioEstudiante(horario_estudiante: HorarioEstudianteModel) {
    return this.http.put<string>(`${this.BASE_URL}/horario_estudiantes/actualizar/${horario_estudiante.idhorario_estudiante}`, horario_estudiante)
  }

  borrarHorarioEstudiante(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/horario_estudiantes/borrar/${id}`)
  }
  
}
