import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModuloModel } from './modulo.model';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerModulos() {
    return this.http.get<ModuloModel[]>(this.BASE_URL+'/modulos');
  }

  obtenerModulo(id: string) {
    return this.http.get<ModuloModel[]>(`${this.BASE_URL}/modulos/${id}`);
  }

  agregarModulo(modulo: ModuloModel) {
    return this.http.post<string>(`${this.BASE_URL}/modulos/agregar`, modulo);
  }

  actualizarModulo(modulo: ModuloModel) {
    return this.http.put<string>(`${this.BASE_URL}/modulos/actualizar/${modulo.idmodulo}`, modulo)
  }

  borrarHorarioEstudiante(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/modulos/borrar/${id}`)
  }

}
