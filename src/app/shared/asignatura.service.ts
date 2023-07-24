import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsignaturaModel } from './asignatura.model';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  
  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerAsignaturas() {
    return this.http.get<AsignaturaModel[]>(this.BASE_URL+'/asignaturas');
  }

  obtenerAsignatura(id: string) {
    return this.http.get<AsignaturaModel[]>(`${this.BASE_URL}/asignaturas/${id}`);
  }

  agregarAsignatura(asignatura: AsignaturaModel) {
    return this.http.post<string>(`${this.BASE_URL}/asignaturas/agregar`, asignatura);
  }

  actualizarAsignatura(asignatura: AsignaturaModel) {
    return this.http.put<string>(`${this.BASE_URL}/asignaturas/actualizar/${asignatura.idasignatura}`, asignatura)
  }

  borrarAsignatura(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/asignaturas/borrar/${id}`)
  }

}
