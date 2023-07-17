import { Component } from '@angular/core';

@Component({
  selector: 'app-profesores-add-cali',
  templateUrl: './profesores-add-cali.component.html',
  styleUrls: ['./profesores-add-cali.component.css']
})
export class ProfesoresAddCaliComponent {
  estudiante: string = ''; // Variable para almacenar el estudiante seleccionado
  parcial1: number = 0; // Variable para almacenar la nota del primer parcial
  parcial2: number = 0; // Variable para almacenar la nota del segundo parcial
  modulo: string = ''; // Variable para almacenar el módulo seleccionado
  promedio: number = 0; // Variable para almacenar el promedio calculado
  calificaciones: any[] = []; // Array para almacenar las calificaciones registradas

  calcularPromedio(): void {
    this.promedio = (this.parcial1 + this.parcial2) / 2;
  }
  registrarCalificaciones(): void {
    // Crear un objeto con los datos de la calificación
    const calificacion = {
      estudiante: this.estudiante,
      parcial1: this.parcial1,
      parcial2: this.parcial2,
      promedio: this.promedio,
      modulo: this.modulo
    };

    // Agregar la calificación al array de calificaciones
    this.calificaciones.push(calificacion);

    // Limpiar los campos de entrada
    this.estudiante = '';
    this.parcial1 = 0;
    this.parcial2 = 0;
    this.modulo = '';
    this.promedio = 0;
  }
}
