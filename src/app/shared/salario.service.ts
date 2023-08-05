import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalarioModel } from './salario.model';

@Injectable({
  providedIn: 'root'
})
export class SalarioService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  obtenerSalarios() {
    return this.http.get<SalarioModel[]>(this.BASE_URL+'/salarios');
  }

  obtenerSalario(id: string) {
    return this.http.get<SalarioModel[]>(`${this.BASE_URL}/salarios/${id}`);
  }

  agregarSalario(salario: SalarioModel) {
    return this.http.post<string>(`${this.BASE_URL}/salarios/agregar`, salario);
  }

  actualizarSalario(salario: SalarioModel) {
    return this.http.put<string>(`${this.BASE_URL}/salarios/actualizar/${salario.idsalario}`, salario)
  }

  borrarSalario(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/salarios/borrar/${id}`)
  }

}
