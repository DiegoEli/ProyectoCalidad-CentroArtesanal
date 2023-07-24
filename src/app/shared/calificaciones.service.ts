import { Injectable } from '@angular/core';
import { CalificacionesModel } from './calificaciones.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerCalificaciones() {
    return this.http.get<CalificacionesModel[]>(this.BASE_URL+'/calificaciones');
  }

  obtenerCalificacion(id: string) {
    return this.http.get<CalificacionesModel[]>(`${this.BASE_URL}/calificaciones/${id}`);
  }

  agregarCalificacion(calificacion: CalificacionesModel) {
    return this.http.post<string>(`${this.BASE_URL}/calificaciones/agregar`, calificacion);
  }

  actualizarCalificacion(calificacion: CalificacionesModel) {
    return this.http.put<string>(`${this.BASE_URL}/calificaciones/actualizar/${calificacion.idcalificaciones}`, calificacion)
  }

  borrarCalificacion(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/calificaciones/borrar/${id}`)
  }
  
}
