import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerfilDocenteModel } from './perfil-docente.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilDocenteService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerPerfilDocentes() {
    return this.http.get<PerfilDocenteModel[]>(this.BASE_URL+'/perfil_docentes');
  }

  obtenerPerfilDocente(id: string) {
    return this.http.get<PerfilDocenteModel[]>(`${this.BASE_URL}/perfil_docentes/${id}`);
  }

  agregarPerfilDocente(perfil_docente: PerfilDocenteModel) {
    return this.http.post<string>(`${this.BASE_URL}/perfil_docentes/agregar`, perfil_docente);
  }

  actualizarPerfilDocente(perfil_docente: PerfilDocenteModel) {
    return this.http.put<string>(`${this.BASE_URL}/perfil_docentes/actualizar/${perfil_docente.idperfil_docente}`, perfil_docente)
  }

  borrarPerfilDocente(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/perfil_docentes/borrar/${id}`)
  }

}
