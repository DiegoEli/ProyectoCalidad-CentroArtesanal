import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilEstudianteModel } from './perfil-estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilEstudianteService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerPerfilEstudiantes() {
    return this.http.get<PerfilEstudianteModel[]>(this.BASE_URL+'/perfil_estudiantes');
  }

  obtenerPerfilEstudiante(id: string) {
    return this.http.get<PerfilEstudianteModel[]>(`${this.BASE_URL}/perfil_estudiantes/${id}`);
  }

  agregarPerfilEstudiante(perfil_estudiante: PerfilEstudianteModel) {
    return this.http.post<string>(`${this.BASE_URL}/perfil_estudiantes/agregar`, perfil_estudiante);
  }

  actualizarPerfilEstudiante(perfil_estudiante: PerfilEstudianteModel) {
    return this.http.put<string>(`${this.BASE_URL}/perfil_estudiantes/actualizar/${perfil_estudiante.idperfil_estudiante}`, perfil_estudiante)
  }

  borrarPerfilEstudiante(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/perfil_estudiantes/borrar/${id}`)
  }

}
